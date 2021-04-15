import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-edit" />
                      </div>
                      <div className="timeline-label">
                        <h2>Strange Frontier Character Creator  <span>May 2020 - Present</span></h2>
                        <p>I am currently working on an Android and iOS application that utilizes the React Native JavaScript framework. The app allows the user to input information about their Tabletop RPG characters and create entries for them that display and modify their stats and equipment.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-edit" />
                      </div>
                      <div className="timeline-label">
                        <h2>Tech Support at Nintendo of America  <span>November 2020 - Present</span></h2>
                        <p>Since graduating into the pandemic, I have been doing tech support work at Nintendo of America. My responsibilities primarily involve solving technical issues and bugs that our employees face when using private company software. I also handle user credentials management and assist in the investigation of fraud and unauthorized transactions.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-edit" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at Camouflaj Games  <span>May 2019 - September 2019</span></h2>
                        <p>During my time at Camouflaj I had the opportunity to work extensively on big budget game titles such as Iron Man VR for PlayStation, and the long awaited Shenmue III. I worked closely with the QA and IT teams and learned what it takes to do Agile work with a large team.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-edit" />
                      </div>
                      <div className="timeline-label">
                        <h2>TheatreBot Web Application  <span>May 2017 - December 2017, March 2021 - Present</span></h2>
                        <p>In my Sophomore year of college I joined a team of Computer Science and Theatre students to assist in developing a web app called TheatreBot that simplified the audition process. Utilizing the MEAN stack and the Bootstrap library, I assisted in creating the Front-End of the application, including the buttons and layout that make up the user interface. We are now in the process of recreating the app utilizing the React.js JavaScript framework.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-edit" />
                      </div>
                      <div className="timeline-label">
                        <h2>Bachelor's in Computer Science at the University of Puget Sound  <span>September 2016 - May 2020</span></h2>
                        <p>I spent 4 years in university studying Computer Science, starting with the basics and eventually excelling in every CS class I took. After taking classes including Data Structures & Algorithms, Software Engineering, Graphics, Network Programming and many more, I obtained my degree with a 3.5 cumulative GPA. I also continued my passion for the arts and humanities with my minor in Spanish and my involvement with theater.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
