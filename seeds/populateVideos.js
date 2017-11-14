exports.seed = function (knex, Promise) {
  return knex('videos').del()
    .then(() => {
      return knex('videos').insert([
        {id: 1, vid_url: 'gId6nrMDmUU', quote: 'I love lamp', startTime: 0, quoteStart: 14, quoteEnd: 16, pauseTime: 10, title: 'Anchorman'},
        {id: 2, vid_url: 'VWb1z6ZwUoY', quote: 'We came we saw we kicked it\'s ass', startTime: 43, quoteStart: 76, quoteEnd: 79, pauseTime: 10, title: 'Ghostbusters'},
        {id: 3, vid_url: 'Coemj2qdWMw', quote: 'Happy people just don\'t shoot their husbands', startTime: 63, quoteStart: 78, quoteEnd: 80, pauseTime: 10, title: 'Legally Blonde'},
        {id: 4, vid_url: 'pEOVNmSR7_c', quote: 'Yippee ki-yay mother f*****', startTime: 81, quoteStart: 109, quoteEnd: 112, pauseTime: 10, title: 'Die Hard'},
        {id: 5, vid_url: '1YGfrGKK9Mo', quote: 'I\'m flying Jack', startTime: 24, quoteStart: 40, quoteEnd: 43, pauseTime: 10, title: 'Titanic'},
        {id: 6, vid_url: 'TU7CDejp6Lw', quote: 'Get to the chopper', startTime: 103, quoteStart: 129, quoteEnd: 132, pauseTime: 10, title: 'Predator'},
        {id: 7, vid_url: 'pxPGzj2L3n0', quote: 'And my axe', startTime: 0, quoteStart: 9, quoteEnd: 12, pauseTime: 10, title: 'The Lord of The Rings'},
        {id: 8, vid_url: 'h6sj89xgnl4', quote: 'No I am your father', startTime: 92, quoteStart: 102, quoteEnd: 106, pauseTime: 10, title: 'Starwars: the Empire Strikes Back'},
        {id: 9, vid_url: 'vUN7yu7zvz8', quote: 'you\'re a wizard harry', startTime: 16, quoteStart: 21, quoteEnd: 23, pauseTime: 10, title: 'Harry Potter and the Scorcerer\'s Stone'},
        {id: 10, vid_url: 'EemLsTG5fX8', quote: 'I wrote to you everyday for a year', startTime: 81, quoteStart: 102, quoteEnd: 104, pauseTime: 10, title: 'The Notebook'},
        {id: 11, vid_url: 'NVPLqbWXdDA', quote: 'leelou dallas multipass', startTime: 50, quoteStart: 59, quoteEnd: 62, pauseTime: 10, title: 'The 5th Element'},
        {id: 12, vid_url: 'RKysEIVJfBs', quote: 'the names bond james bond', startTime: 67, quoteStart: 80, quoteEnd: 86, pauseTime: 10, title: 'Casino Royale'},
        {id: 13, vid_url: 'AyrP-pwDayE', quote: 'you had me at hello', startTime: 75, quoteStart: 91, quoteEnd: 94, pauseTime: 10, title: 'Jerry Maguire'},
        {id: 14, vid_url: 'vL-KQij0I8I', quote: 'from a pile of stuff', startTime: 97, quoteStart: 108, quoteEnd: 111, pauseTime: 10, title: 'The Devil Wears Prada'},
        {id: 15, vid_url: 'oKxsW8DKJQQ', quote: 'you\'re going to need a bigger boat', startTime: 57, quoteStart: 75, quoteEnd: 78, pauseTime: 10, title: 'Jaws'},
        {id: 16, vid_url: '9FnO3igOkOk', quote: 'you can\'t handle the truth', startTime: 33, quoteStart: 44, quoteEnd: 47, pauseTime: 10, title: 'A Few Good Men'},
        {id: 17, vid_url: 'YbBiXPVKuTA', quote: 'are you not entertained', startTime: 71, quoteStart: 85, quoteEnd: 87, pauseTime: 10, title: 'Gladiator'},
        {id: 18, vid_url: 'luBk4VrMHNI', quote: 'become a pop star and they give you them for free', startTime: 12, quoteStart: 22, quoteEnd: 25, pauseTime: 10, title: 'Love Actually'},
        {id: 19, vid_url: 't9HUyHmLFzA', quote: 'there are many things that I would like to say to you but i dont know how', startTime: 118, quoteStart: 133, quoteEnd: 141, pauseTime: 10, title: 'wndrwll', isMeme: 'meOhMyIHaveEnjoyedThatYesBoy'},
        {id: 20, vid_url: 'dQw4w9WgXcQ', quote: 'you wouldn\'t get this from any other guy', startTime: 0, quoteStart: 30, quoteEnd: 36, pauseTime: 10, title: 'Never Gonna Give You Up', isMeme: 'meOhMyIHaveEnjoyedThatYesBoy'},
        {id: 21, vid_url: '8L4cttwNaDs', quote: 'that\'s it back to winnipeg', startTime: 0, quoteStart: 9, quoteEnd: 13, pauseTime: 10, title: 'Simpsons', isMeme: 'meOhMyIHaveEnjoyedThatYesBoy'},
        {id: 22, vid_url: 'yFhR1fKWG0', quote: 'that student was albert einstein', startTime: 158, quoteStart: 211, quoteEnd: 225, pauseTime: 10, title: 'Paradigm Shift', isMeme: 'meOhMyIHaveEnjoyedThatYesBoy'},
        {id: 23, vid_url: 'WIrWyr3HgXI', quote: 'i\'m still gonna send it', startTime: 0, quoteStart: 3, quoteEnd: 6, pauseTime: 10, title: 'Send it', isMeme: 'meOhMyIHaveEnjoyedThatYesBoy'},
        {id: 24, vid_url: 'du-TY1GUFGk', quote: 'it is wednesday my dudes', startTime: 0, quoteStart: 0, quoteEnd: 5, pauseTime: 10, title: 'wednesday', isMeme: 'meOhMyIHaveEnjoyedThatYesBoy'},
        {id: 25, vid_url: 'G7RgN9ijwE4', quote: 'you want them to do you so much you could do anything', startTime: 0, quoteStart: 14, quoteEnd: 19, pauseTime: 10, title: 'I have a dream', isMeme: 'meOhMyIHaveEnjoyedThatYesBoy'},
        {id: 26, vid_url: 'jUjw41YucDY', quote: 'I am the one don\'t weigh a ton don\'t need a gun to get respect up on the street', startTime: 0, quoteStart: 14, quoteEnd: 18, pauseTime: 10, title: 'Spongebob Curry', isMeme: 'meOhMyIHaveEnjoyedThatYesBoy'},
        {id: 27, vid_url: '-w3iPFl-cfI', quote: 'oh my god there\'s nothing wrong with the bidet is there', startTime: 0, quoteStart: 12, quoteEnd: 15, pauseTime: 10, title: '$900', isMeme: 'meOhMyIHaveEnjoyedThatYesBoy'}
      ])
    })
}
