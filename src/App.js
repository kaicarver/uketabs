import React from 'react';
import { Helmet } from 'react-helmet-async';
import './App.css';
import { scores } from './scores.js';

function App() {
  let songNumber = 0;
  return (
    <div onClick={() => { alert("hi from parent"); songNumber++ }}>
      <Song song={scores[songNumber]}/>
   </div>
  );
}

class Song extends React.Component {
  render() {
    let s = this.props.song;
    return <div>
      <Helmet>
        <title>{s.song} by {s.author}</title>
      </Helmet>
      <div id="title">
        <h1>{s.song}</h1>
        <h2>by {s.author}</h2>
        <div class="date">{s.date}</div>
        <p>
          <a href={"https://" + s.url}>{s.url}</a><br />
        </p>
        <p id="chords">
          <img src={s.chordsImage} alt="tabs" style={{ width: s.chordsImageWidth || '115px' }} />
        </p>
      </div>
      <pre style={{ fontSize: s.scoreFontSize || '100%' }}>{s.score}</pre>
    </div>
  }
}

export default App;
