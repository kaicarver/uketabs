import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './App.css';
import { scores } from './scores.js';
import Demos from './Demos.js'

export function App(props) {
  let songNumber = 2;
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
          <script src="webcomponents-lite.min.js"></script>
          <script src="uke-chord.js"></script>
        </Helmet>
        <div id="title">
          <h1 onClick={() => {
            //alert("hi from song " + this.state.songNumber);
            let num = (this.state.songNumber + 1) % scores.length;
            this.setState({ songNumber: num, s: scores[num] })
          }}>
            {this.state.s.song} {this.state.songNumber} {this.props.songNumber}</h1>
          <h2>by {this.state.s.author}</h2>
          <div className="date">{this.state.s.date}</div>
          <p>
            <LinkOut url={"https://" + this.state.s.url} label={this.state.s.url} />
            <br />
            <LinkOut url={"https://en.wikipedia.org/wiki/" + this.state.s.wiki} label={"wiki"} />
            <LinkOut url={"https://youtu.be/" + this.state.s.video} label={"video"} />
          </p>
          chords {this.state.s.chords}<br/>
          song number state {this.state.songNumber}<br/>
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
      {props.chords.split(" ").map((name) =>
        <span>{name}: <Chord name={name} /></span>
      )}<br />
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
    name: "Am",
    frets: "2000",
    fingers: "2000",
  },
  {
    name: "Bb",
    frets: "3211",
    fingers: "3211",
  },
  {
    name: "C",
    frets: "0003",
    fingers: "0003",
  },
  {
    name: "D",
    frets: "2220",
    fingers: "1230",
  },
  {
    name: "Dm",
    frets: "2210",
    fingers: "2310",
  },
  {
    name: "Em",
    frets: "0321",
    fingers: "0321",
  },
  {
    name: "F",
    frets: "2010",
    fingers: "2010",
  },
  {
    name: "Fadd9",
    frets: "0010",
    fingers: "0010",
  },
  {
    name: "F#m",
    frets: "3111",
    fingers: "3111",
  },
  {
    name: "G",
    frets: "0232",
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
  return <span><a
    href={props.url}
    target="_blank"
    rel="noopener noreferrer">
    {props.label}
  </a> </span>
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
