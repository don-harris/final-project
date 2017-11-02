import React from 'react'

const Speech = () => {
  select_language.selectedIndex = 'English'
  select_dialect.selectedIndex = 'en-NZ'
  showInfo('info_start')

  var final_transcript = ''
  var recognizing = false
  var ignore_onend
  var start_timestamp
  if (!('webkitSpeechRecognition' in window)) {
    upgrade()
  } else {
    start_button.style.display = 'inline-block'
    var recognition = new webkitSpeechRecognition()
    recognition.continuous = true
    recognition.interimResults = true
    recognition.onstart = function () {
      recognizing = true
      showInfo('info_speak_now')
      start_img.src = 'mic-animate.gif'
    }
    recognition.onerror = function (event) {
      if (event.error == 'no-speech') {
        start_img.src = 'mic.gif'
        showInfo('info_no_speech')
        ignore_onend = true
      }
      if (event.error == 'audio-capture') {
        start_img.src = 'mic.gif'
        showInfo('info_no_microphone')
        ignore_onend = true
      }
      if (event.error == 'not-allowed') {
        if (event.timeStamp - start_timestamp < 100) {
          showInfo('info_blocked')
        } else {
          showInfo('info_denied')
        }
        ignore_onend = true
      }
    }
    recognition.onend = function () {
      recognizing = false
      if (ignore_onend) {
        return
      }
      start_img.src = 'mic.gif'
      if (!final_transcript) {
        showInfo('info_start')
        return
      }
      showInfo('')
      if (window.getSelection) {
        window.getSelection().removeAllRanges()
        var range = document.createRange()
        range.selectNode(document.getElementById('final_span'))
        window.getSelection().addRange(range)
      }
    }
    recognition.onresult = function (event) {
      var interim_transcript = ''
      for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          final_transcript += event.results[i][0].transcript
        } else {
          interim_transcript += event.results[i][0].transcript
        }
      }
      final_transcript = capitalize(final_transcript)
      final_span.innerHTML = linebreak(final_transcript)
      interim_span.innerHTML = linebreak(interim_transcript)
      if (final_transcript || interim_transcript) {
        showButtons('inline-block')
      }
    }
  }
  function upgrade () {
    start_button.style.visibility = 'hidden'
    showInfo('info_upgrade')
  }
  var two_line = /\n\n/g
  var one_line = /\n/g
  function linebreak (s) {
    return s.replace(two_line, '<p></p>').replace(one_line, '<br>')
  }
  var first_char = /\S/
  function capitalize (s) {
    return s.replace(first_char, function (m) { return m.toUpperCase() })
  }
  function copyButton () {
    if (recognizing) {
      recognizing = false
      recognition.stop()
    }
    copy_button.style.display = 'none'
    copy_info.style.display = 'inline-block'
    showInfo('')
  }
  function startButton (event) {
    if (recognizing) {
      recognition.stop()
      return
    }
    final_transcript = ''
    recognition.lang = select_dialect.value
    recognition.start()
    ignore_onend = false
    final_span.innerHTML = ''
    interim_span.innerHTML = ''
    start_img.src = 'mic-slash.gif'
    showInfo('info_allow')
    showButtons('none')
    start_timestamp = event.timeStamp
  }
  function showInfo (s) {
    if (s) {
      for (var child = info.firstChild; child; child = child.nextSibling) {
        if (child.style) {
          child.style.display = child.id == s ? 'inline' : 'none'
        }
      }
      info.style.visibility = 'visible'
    } else {
      info.style.visibility = 'hidden'
    }
  }
  var current_style
  function showButtons (style) {
    if (style == current_style) {
      return
    }
    current_style = style
  }

  return (
    <div className="section" id="app">
      <h1>Speech-to-Text Test</h1>

      <div id="info">
        <p id="info_start">Click Record to go.</p>
        <p id="info_speak_now">Speak now.</p>
        <p id="info_no_speech">No speech was detected. You may need to adjust your microphone settings.</p>
        <p id="info_no_microphone" style="display:none">
          No microphone was found. Ensure that a microphone is installed and that microphone settings are configured correctly.</p>
        <p id="info_allow">Click the "Allow" button above to enable your microphone.</p>
        <p id="info_denied">Permission to use microphone was denied :(</p>
        <p id="info_blocked">Permission to use microphone is blocked. To change, go to chrome://settings/contentExceptions#media-stream</p>
        <p id="info_upgrade">Web Speech API is not supported by this browser. Use
          <a href="//www.google.com/chrome">Chrome</a> instead! :)</p>
      </div>

      <div>
        <button type="button" id="start_button" onclick="startButton(event)">Record</button>
      </div>

      <div id="results">
        <span id="final_span" className="final"></span>
        <span id="interim_span" className="interim"></span>
      </div>

      <div>
        <div id="div_language">
          <h2 id="select_language"></h2>
              &nbsp;&nbsp;
          <h2 id="select_dialect"></h2>
        </div>
      </div>
    </div>
  )
}

export default Speech
