import React from 'react'

const AboutUsPeople = props => {
  const {name, githubUserName, imageSrc, email, aboutMe} = props

return (
  <div className="team-info">
    <article className="media">
        <figure className="media-left">
          <p className="image is-128x128">
            <img src={`/images/${imageSrc}`} />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <small>{email}</small>
              <br />
              {aboutMe}
            </p>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <div className="level-item">
                <a title={`${name} Github profile`} target="_blank" href={`https://github.com/${githubUserName}`}>
                  <span className="icon is-small"><i className="fa fa-github" aria-hidden="true"></i></span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </article>
  </div>
)}

export default AboutUsPeople