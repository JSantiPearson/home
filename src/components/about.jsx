import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                  <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                    <div className="col-md-12">
                        <div className="about-desc">
                        <span className="heading-meta">About Me</span>
                        <h2 className="colorlib-heading">Who Am I?</h2>
                        <p>I am an Afro-Latino software developer with a passion for making slick mobile and web applications and developing videogames on platforms like PlayStation 4, PC, and mobile.</p>
                        <p>I want to gain more experience by building impactful applications that can make tedious tasks efficient and stylish.</p>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          </section>
          <section className="colorlib-about">
          <div className="colorlib-narrow-content">
              <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                  <span className="heading-meta">What do I do?</span>
                  <h2 className="colorlib-heading">Here are some of my areas of expertise</h2>
              </div>
              </div>
              <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                  <div className="services color-1">
                  <span className="icon">
                      <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                      <h3>Web & Mobile Development </h3>
                      <p>I have experience building websites and mobile applications using JavaScript, React, Angular, HTML, and CSS.</p>
                  </div>
                  </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                  <div className="services color-3">
                  <span className="icon">
                      <i className="icon-data" />
                  </span>
                  <div className="desc">
                      <h3>Data Structures & Algorithms</h3>
                      <p>My 4 years of study to obtain my B.S. degree were foundational to my understanding of algorithms and how to handle data.</p>
                  </div>
                  </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                  <div className="services color-5">
                  <span className="icon">
                      <i className="icon-gamepad" />
                  </span>
                  <div className="desc">
                      <h3>Game Development</h3>
                      <p>I found my passion for game development during my internship at Camouflaj Games, and have applied my skills as a computer scientist to create exciting interactive experiences.</p>
                  </div>
                  </div>
              </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
