import React from 'react';
import { Helmet } from 'react-helmet-async';
import './App.css';
import { scores } from './scores.js';

function App() {
  let songNumber = 0;
  return (
    <div>
      <Song songNumber={songNumber}/>
   </div>
  );
}

class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = {songNumber: this.props.songNumber, s: scores[this.props.songNumber]};
  }
  render() {
    return <div
      onClick={() => {
        //alert("hi from song " + this.state.songNumber);
        let num = (this.state.songNumber + 1) % scores.length;
        this.setState({songNumber: num, s: scores[num]}) }}>
      <Helmet>
        <title>{this.state.s.song} by {this.state.s.author}</title>
      </Helmet>
      <div id="title">
        <h1>{this.state.s.song}</h1>
        <h2>by {this.state.s.author}</h2>
        <div class="date">{this.state.s.date}</div>
        <p>
          <a href={"https://" + this.state.s.url}>{this.state.s.url}</a><br />
        </p>
        <p id="chords">
          <img src={this.state.s.chordsImage} alt="tabs" style={{ width: this.state.s.chordsImageWidth || '115px' }} />
        </p>
      </div>
      <pre style={{ fontSize: this.state.s.scoreFontSize || '100%' }}>{this.state.s.score}</pre>
    </div>
  }
}

export default App;
