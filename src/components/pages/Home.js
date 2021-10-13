import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <>
        <section className="contents">
          <Link to="/detail">
            <article className="compare">
              <div className="imgs">
                <div>
                  <img src="./assets/images/android.jpeg" alt="" srcSet="" />
                </div>
                <div>
                  <img src="./assets/images/ios.jpeg" alt="" srcSet="" />
                </div>
              </div>
              <div className="description">
                <div className="profile">
                  <img src="./assets/images/beth.jpeg" alt="" srcSet="" />
                </div>
                <div className="script">
                  <h3>[IT]&nbsp;Android VS iOS</h3>
                  <p>
                    naiive <span>&middot;</span> 136,333 views <span>&middot;</span> 2021-09-21
                  </p>
                </div>
              </div>
            </article>
          </Link>
          <article className="compare">
            <div className="imgs">
              <div>
                <img src="./assets/images/ai.jpeg" alt="" srcSet="" />
              </div>
              <div>
                <img src="./assets/images/human.jpeg" alt="" srcSet="" />
              </div>
            </div>
            <div className="description">
              <div className="profile">
                <img src="./assets/images/leedohyeon.jpeg" alt="" srcSet="" />
              </div>
              <div className="script">
                <h3>[일반]&nbsp;사람 일을 대신하게 될 AI VS 그래도 사람의 뇌</h3>
                <p>
                  Alice Kim <span>&middot;</span> 54,214 views <span>&middot;</span> 2021-10-09
                </p>
              </div>
            </div>
          </article>
          <article className="compare">
            <div className="imgs">
              <div>
                <img src="./assets/images/popmusic.png" alt="" srcSet="" />
              </div>
              <div>
                <img src="./assets/images/classicalmusic.jpeg" alt="" srcSet="" />
              </div>
            </div>
            <div className="description">
              <div className="profile">
                <img src="./assets/images/cillianmurphy.jpeg" alt="" srcSet="" />
              </div>
              <div className="script">
                <h3>[음악]&nbsp;Pop VS Classical</h3>
                <p>
                  Mr. Lee <span>&middot;</span> 44,444 views <span>&middot;</span> 2021-10-10
                </p>
              </div>
            </div>
          </article>
          <article className="compare">
            <div className="imgs">
              <div>
                <img src="./assets/images/coffee.jpeg" alt="" srcSet="" />
              </div>
              <div>
                <img src="./assets/images/tea.jpeg" alt="" srcSet="" />
              </div>
            </div>
            <div className="description">
              <div className="profile">
                <img src="./assets/images/jeonyeobin.jpeg" alt="" srcSet="" />
              </div>
              <div className="script">
                <h3>[음료]&nbsp;Coffee VS Tea</h3>
                <p>
                  Lily James <span>&middot;</span> 13,442 views <span>&middot;</span> 2021-10-01
                </p>
              </div>
            </div>
          </article>
        </section>
      </>
    );
  }
}
