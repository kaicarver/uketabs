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
    return <div>
      <Helmet>
        <title>{this.state.s.song} by {this.state.s.author}</title>
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
        <NameForm />
        <EssayForm />
        <FlavorForm />
        <p>
          <Link url={"https://" + this.state.s.url} label={this.state.s.url} />
          <br />
          <Link url={"https://en.wikipedia.org/wiki/" + this.state.s.wiki} label={"wiki"} />
          <Link url={"https://youtu.be/" + this.state.s.video} label={"video"} />
          <br />

        </p>
        <p id="chords">{this.state.s.chords}<br />
          <img src={this.state.s.chordsImage} alt="tabs" style={{ width: this.state.s.chordsImageWidth || '115px' }} />
        </p>
      </div>
      <pre style={{ fontSize: this.state.s.scoreFontSize || '100%' }}>{this.state.s.score}</pre>
    </div>
  }
}

function Link(props) {
  return <>
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer">
      {props.label}
    </a>
  </>
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
