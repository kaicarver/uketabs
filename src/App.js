import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './App.css';
import { scores } from './scores.js';
import Demos from './Demos.js'

export function App(props) {
  let songNumber = 0;
  return (
    <div>
      <Navbar {...props}/>
      <Song songNumber={songNumber} test={props.test} />
    </div>
  );
}

class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = { songNumber: this.props.songNumber, s: scores[this.props.songNumber] };
  }
  render() {
    return (
      <main>
        <Helmet>
          <title>{this.state.s.song} by {this.state.s.author}</title>
          <script src="//pianosnake.github.io/uke-chord/webcomponents-lite.min.js"></script>
          <script src="//pianosnake.github.io/uke-chord/uke-chord.js"></script>
        </Helmet>
        <div id="title">
          <h1 onClick={() => {
            //alert("hi from song " + this.state.songNumber);
            let num = (this.state.songNumber + 1) % scores.length;
            this.setState({ songNumber: num, s: scores[num] })
          }}>
            {this.state.s.song}</h1>
          <h2>by {this.state.s.author}</h2>
          <div className="date">{this.state.s.date}</div>
          <p>
            <LinkOut url={"https://" + this.state.s.url} label={this.state.s.url} />
            <br />
            <LinkOut url={"https://en.wikipedia.org/wiki/" + this.state.s.wiki} label={"wiki"} />
            <LinkOut url={"https://youtu.be/" + this.state.s.video} label={"video"} />
          </p>
          <Chords chords={this.state.s.chords} />
          { this.props.test ? <Demos /> : "nothing" }
          <p id="chords">{this.state.s.chords}<br />
            <img src={this.state.s.chordsImage} alt="tabs" style={{ width: this.state.s.chordsImageWidth || '115px' }} />
          </p>
        </div>
        <pre style={{ fontSize: this.state.s.scoreFontSize || '100%' }}>{this.state.s.score}</pre>
      </main>
    )
  }
}

function Chords(props) {
  return (
    <div>
      chords: {props.chords}<br />
      <Chord frets="0003" />
      <Chord frets="0232" />
      <Chord frets="2010" />
      <Chord frets="0321" />
      <Chord frets="2210" />
      <Chord frets="3211" />
    </div>
  )
}
function Chord(props) {
  return (
    <div>
      <uke-chord frets={props.frets}></uke-chord>
    </div>
  )
}

function LinkOut(props) {
  return <>
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer">
      {props.label}
    </a>
  </>
}

export function Navbar(props) {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/test">Test</Link></li>
        <li><Link to="/about">About this site</Link></li>
      </ul>
    </div>
  );
};

export default App;
