import React from "react";
import { Link } from "react-router-dom";

const AboutUs = props => {
  return (
    <div>
      <Link to="/">
          <button className="button is large">Back to Home</button>
      </Link>
      <div className='something'>
        <p>We are five excited devs coming together to create the ultimate party game!</p>
        <br />
        <h2 className= "subtitle is-2">Meet the Team</h2>

        <article class="media">
        <figure class="media-left">
          <p class="image is-100x100">
            <img src="/images/joe.jpg" width="200px" height="200px" />
          </p>
        </figure>
      <div class="media-content">
            <div class="content">
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
              </p>
            </div>
        <nav class="level is-mobile">
      <div class="level-left">
        <a class="level-item">
          <span class="icon is-small"><i class="fa fa-reply"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fa fa-retweet"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fa fa-heart"></i></span>
        </a>
      </div>
    </nav>
  </div>
  <div class="media-right">
    <button class="delete"></button>
  </div>

        <img src="/images/annah.jpg" width="200px" height="200px" />
        <img src="/images/cal.png" width="200px" height="200px" />
        <img src="/images/donh.jpg" width="200px" height="200px" />
        <img src="/images/rich.jpg" width="200px" height="200px" />
      </div>
    </div>
  )
};

export default AboutUs