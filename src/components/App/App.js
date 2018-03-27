import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      starList: [
        { name: 'Fomalhaut', diameter: 300 },
        { name: 'Elnath', diameter: 200 },
        { name: 'Gacrux', diameter: 500 },
        { name: 'Hadar', diameter: 1000 },
      ]
    };
    this.state.newStar = {
      name: '',
      diameter: 0
    };

    // this.handleChangeFor = this.handleChangeFor.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state.starUL = this.state.starList.map(star => <li key={star.name}>{star.name} of {star.diameter}</li>);
  }

  handleChangeFor = propertyName => event => { this.setState(
    {
      starList: [ ...this.state.starList ],
      newStar: { ...this.state.newStar, [propertyName]: event.target.value }
    }
  )};

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      starList: [...this.state.starList, this.state.newStar],
    });
  }

  render() {
    let i = 0;
    return (
      <div>
        <pre>{ JSON.stringify(this.state) }</pre>
          Getting one star on the DOM
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.newStar.name} onChange={this.handleChangeFor('name')} />
          <input type="text" value={this.state.newStar.diameter} onChange={this.handleChangeFor('diameter')} />
          <input type="submit" value="Submit" />
        </form>
        <ul>
          { this.state.starList.map(star => <li key={i++}>{star.name} of {star.diameter}</li>) }
        </ul>
      </div>
    );
  }
}

export default App;
