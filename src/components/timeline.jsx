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
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-edit" />
                      </div>
                      <div className="timeline-label">
                        <h2>Finance Agent at Nintendo of America  <span>2020 - Present</span></h2>
                        <p>Since graduating into the pandemic, I have been doing financial and support work at Nintendo, including error code resolution, IT projects involving company software, and handling unauthorized charges. In my free time, I enjoy working on personal projects such as mobile applications and websites.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-edit" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at Camouflaj Games  <span>Summer of 2019</span></h2>
                        <p>During my time at Camouflaj I had the opportunity to work extensively on big budget game titles such as Iron Man VR for PlayStation, and the long awaited Shenmue III. I worked closely with the QA and IT teams and learned what it takes to do Agile work with a large team.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-edit" />
                      </div>
                      <div className="timeline-label">
                        <h2>Bachelor's in Computer Science at the University of Puget Sound  <span>2016 - 2020</span></h2>
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
