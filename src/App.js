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
        <Reservation />
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
    this.state = { value: 'bla' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert('Name submitted: ' + this.state.value);
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
    this.state = { value: 'bla' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert('Essay submitted: ' + this.state.value);
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
    this.state = { value: ['lime'] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: [event.target.value, 'coconut'] });
  }
  handleSubmit(event) {
    alert('Flavor submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Flavor:
          <select multiple={true} value={this.state.value} onChange={this.handleChange}>
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

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    alert('Reservation submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
