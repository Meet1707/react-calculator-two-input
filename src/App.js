import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    value1: '0',
    value2: '0',
    answer: ''
  }
  updateState = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  calculateAnswer = (event) => {
    const { value1, value2 } = this.state;
    switch (event.target.value) {
      case "+":
        this.setState({ answer: Number(value1) + Number(value2) })
        break;
      case "-":
        this.setState({ answer: Number(value1) - Number(value2) })
        break;
      case "*":
        this.setState({ answer: Number(value1) * Number(value2) })
        break;
      case "/":
        this.setState({ answer: Number(value1) / Number(value2) })
        break;
    }
  }
  render() {
    return (
      <>
        <h5>Calculator</h5>
        <div className="row">
          <div className="col">
            <input
              className="form-control"
              placeholder="Enter value"
              type="text"
              name="value1"
              onChange={e => this.updateState(e)}
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              placeholder="Enter value"
              type="text"
              name="value2"
              onChange={e => this.updateState(e)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn btn-dark calcButton"
              value="+" onClick={e => this.calculateAnswer(e)}>
              +</button>
          </div>
          <div className="col">
            <button className="btn btn-dark calcButton"
              value="-" onClick={e => this.calculateAnswer(e)}>
              -</button>
          </div>
          <div className="col">
            <button className="btn btn-dark calcButton"
              value="*" onClick={e => this.calculateAnswer(e)}>
              *</button>
          </div>
          <div className="col">
            <button className="btn btn-dark calcButton"
              value="/" onClick={e => this.calculateAnswer(e)}>
              /</button>
          </div>
        </div>
        <p className="form-control">Answer: {this.state.answer}</p>
      </>
    );
  }
}

export default App;
