import React from "react";
import { IoIosFootball } from "react-icons/io";
import { FaHeadphones } from "react-icons/fa";
import { MdOutlineLocalMovies } from "react-icons/md";

function Hobbies() {
  return (
    <div className="container hobby-pad">
      <h2 className="section-label">Passions & Hobbies</h2>
      <div className="hero-badge">
        <span className="hero-badge-dot"></span>
        Explore my Interests
      </div>
      <h2 className="section-title">Beyond the Screen</h2>
      <p className="hobby-item">
        What inspires my rhythm, visual choreography and creative weekends
        outside product craft.
      </p>
      <div className="hobby-gap">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          <IoIosFootball />
          <p className="hobby-p">Football</p>
        </div>
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          <FaHeadphones />
          <p className="hobby-p">Music</p>
        </div>
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          <MdOutlineLocalMovies />
          <p className="hobby-p">Movies</p>
        </div>
      </div>
      <div className="hobby-border">
        <p>My world of Football</p>
        <div className="football-container">
          <div className="stack">
            <div>
              <h2>My favorite club</h2>
              <h3 className="chelsea-p">Chelsea</h3>
              <img
                src="/images/chelsea-logo.png"
                className="artist-image"
                alt="chelsea-logo"
              />
            </div>
            <div>
              <h2 className="fav-space">My best Player of all time</h2>
              <h3 className="chelsea-p">Xavi Hernandez</h3>
              <img
                src="/images/xavi.jpeg"
                className="artist-image"
                alt="xavi Hernandez"
              />
            </div>
          </div>
          <div className="football-writeup">
            <p>
              I enjoy watching football matches, playing football games, most of
              all, I love playing football with other people, enjoying the joy
              of football and scrutinizing the spirit of sportsmanship.
            </p>
          </div>
        </div>
      </div>
      <div>
        <p>Let's explore my music Genres</p>
        <div className="football-container">
          <h2>My all time music Genres:</h2>
          <h3 className="music-p">Rap</h3>
          <div className="music-writeup">
            <p>
              Rap music is number one on my list, i enjoy hip-hop a lot compared
              to any other kind of music, American Raps precisely.
            </p>
            <h3 className="music-p">My favorite Rappers</h3>
            <div>
              <div className="grid-stak">
                <div className="stakimage-div">
                  <img
                    src="/images/lilwayne.jpeg"
                    className="artist-image art-space"
                    alt="Lil Wayne"
                  />
                  <p>Lil Wayne</p>
                </div>
                <div className="stakimage-div">
                  <img
                    src="/images/lamar.jpeg"
                    className="artist-image artist-space"
                    alt="Kendrick Lamar"
                  />
                  <p>Kendrick Lamar</p>
                </div>
              </div>
              <div className="grid-stak">
                <div className="stakimage-div">
                  <img
                    src="/images/rickross.jpeg"
                    className="artist-image artist-space"
                    alt="Rick Ross"
                  />
                  <p>Rick Ross</p>
                </div>
                <div className="stakimage-div">
                  <img
                    src="/images/pac.jpeg"
                    className="artist-image pac-space artist-space"
                    alt="2Pac Shakur"
                  />
                  <p>2Pac Shakur</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="music-p">R & B</h3>
            <p className="music-writeup">
              I would say R & B is the last music genre on my plate, I enjoy the
              smooth melodies and emotional depth that comes with it.
            </p>
            <h3 className="music-p">My favorite R & B Artist</h3>
            <div>
              <img
                src="/images/chrisbrown.jpeg"
                className="artist-image artist-space"
                alt="Chris Brown"
              />
              <p>Chris Brown</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="movie">Let's Dive into my Movie room</p>
        <div className="football-container">
          <h2 className="fav-movie">Some of my favorite movies;</h2>
          <div>
            <div className="grid-stak">
              <div className="stakimage-div">
                <img
                  src="/images/blacklist.jpeg"
                  className="artist-image stakimage art-space"
                  alt="The Blacklist"
                />
                <p>The Blacklist</p>
              </div>
              <div className="stakimage-div">
                <img
                  src="/images/money.jpeg"
                  className="artist-image stakimage artist-space"
                  alt="Money Heist"
                />
                <p>Money Heist</p>
              </div>
            </div>
            <div className="grid-stak">
              <div className="stakimage-div">
                <img
                  src="/images/bad.jpeg"
                  className="artist-image stakimage artist-space"
                  alt="Into the badlands"
                />
                <p>Into the Badlands</p>
              </div>
              <div className="stakimage-div">
                <img
                  src="/images/prison.jpeg"
                  className="artist-image stakimage artist-space"
                  alt="Prison Break"
                />
                <p>Prison Break</p>
              </div>
            </div>
            <div className="grid-stak">
              <div className="stakimage-div">
                <img
                  src="/images/pie.jpeg"
                  className="artist-image stakimage artist-space"
                  alt="American Pie"
                />
                <p>American Pie</p>
              </div>
              <div className="stakimage-div">
                <img
                  src="/images/game.jpeg"
                  className="artist-image stakimage artist-space"
                  alt="Game of Thrones"
                />
                <p>Game of Thrones</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nick">
        <h2>Nickname: <span className="nick-color">Xavimoney</span></h2>
        <h2>Call me Xavimoney and I Light up</h2>
      </div>
    </div>
  );
}

export default Hobbies;
