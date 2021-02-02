import React, { Component } from 'react'
import Resume from '../pdfs/resume.pdf'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Jordan Pearson</a></h1>
              <p><a className="btn" style={{border: "1px solid black", color: "black"}} href={Resume} without rel="noopener noreferrer" target="_blank">View Résumé <i className="icon-download4" /></a></p>
              <span className="email"><i className="icon-mail"></i> jsantipearson@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://github.com/JSantiPearson" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/jordan-santiago-pearson/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://www.facebook.com/JSantiPearson/" target="_blank" rel="noopener noreferrer"><i className="icon-facebook22" /></a></li>
                <li><a href="https://www.instagram.com/jaysantiagop" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="mailto:JSantiPearson@gmail.com" target="_blank" rel="noopener noreferrer"><i className="icon-mail5"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                More to come :)
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
