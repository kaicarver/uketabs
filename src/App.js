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
          { this.props.test ? <Demos /> : "" }
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
      chords: {props.chords.split(" ")}<br />
      chords: {props.chords.split(" ").map((name) =>
        <span>{name} </span>
      )}<br />
      {props.chords.split(" ").map((name) =>
        <span>{name}: <Chord name={name} /></span>
      )}<br />
      <Chord frets="2100" />
      <Chord frets="2000" />
      <Chord frets="0003" />
      <Chord frets="0232" />
      <Chord frets="2010" />
      <Chord frets="0321" />
      <Chord frets="2210" />
      <Chord frets="3211" />
    </div>
  )
}

let chordsData = [
  {
    name: "A",
    frets: "2100",
    fingers: "2100",
  },
  {
    name: "C",
    frets: "0003",
    fingers: "0003",
  },
  {
    name: "F",
    frets: "2010",
    fingers: "2010",
  },
  {
    name: "G",
    frets: "0121",
    fingers: "0132",
  },
];
// Turn list of objects into a map
let chordMap =
  chordsData.reduce((map, o) => { map[o.name] = o; return map; }, {});
function Chord(props) {
  const c = chordMap[props.name] || { name: props.name + "?", frets: props.frets, fingers: "" };
  return (
    <span>
      {c.name} <uke-chord frets={c.frets} position="0" name={c.name} fingers={c.fingers}></uke-chord>
    </span>
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
