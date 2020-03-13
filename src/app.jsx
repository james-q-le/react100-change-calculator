import React, { Component } from 'react';

const changePanels = {
  marginTop:'40px',
  marginBottom:'40px'
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      amountDue: 0,
      amountReceived: 0,
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
      output: null
    }
    this.numberChange = this.numberChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  numberChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  calculate(d, r) {
    let changeDue = r - d;
    const change = r - d;

    return() => {
      if(changeDue > 0) {
        this.setState({
          twenties: Math.floor(changeDue/20),
          output: 'The total change due is $' + Number(change).toFixed(2)
        });
        changeDue = Number(changeDue % 20).toFixed(2);
        this.setState({tens: Math.floor(changeDue/10)});
        changeDue = Number(changeDue % 10).toFixed(2);
        this.setState({fives: Math.floor(changeDue/5)});
        changeDue = Number(changeDue % 5).toFixed(2);
        this.setState({ones: Math.floor(changeDue/1)});
        changeDue = Number(changeDue % 1).toFixed(2);
        this.setState({quarters: Math.floor(changeDue/.25)});
        changeDue = Number(changeDue % .25).toFixed(2);
        this.setState({dimes: Math.floor(changeDue/.10)});
        changeDue = Number(changeDue % .10).toFixed(2);
        this.setState({nickels: Math.floor(changeDue/.05)});
        changeDue = Number(changeDue % .05).toFixed(2);
        this.setState({pennies: Math.floor(changeDue/.01)});
      }
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='border-bottom border-white mb-4'>
          <h1 className='text-white pb-2 pt-2'>Change Calculator</h1>
        </div>
        <div className='form-group row'>
          <div className='col-4'>
            <div className='card'>
              <h6 className='card-header'>Enter Information</h6>
              <div className='card-body'>
                <div className='card-text'>
                  <label for='amountDue'>How much is due?</label>
                </div>
                <div className='card-text'>
                  <input className='w-100 mb-2' name='amountDue' onChange={this.numberChange}/>
                </div>
                <div className='card-text'>
                  <label for='amountReceived'>How much was received?</label>
                </div>
                <div className='class-text'>
                  <input className='w-100' name='amountReceived' onChange={this.numberChange}/>
                </div>
              </div>
              <div className='card-footer'>
                <button className='button btn btn-primary w-100' onClick={this.calculate(this.state.amountDue, this.state.amountReceived)}>Calculate</button>
              </div>
            </div>
          </div>
          <div className='col-8'>
            <div className='card'>
              <div className='alert alert-success text-center m-3'>{this.state.output}</div>
              <div className='container'>
                <div className='form-group row mb-3'>
                  <div className='col-3'>
                    <div className='card mb-1' style={{backgroundColor:'lightgray'}}>
                      <div className='card-text' style={changePanels}>
                        <p className='card-title text-center'>Twenties</p>
                        <p className='change card-subtitle text-center text-muted'>{this.state.twenties}</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-3'>
                    <div className='card mb-1' style={{backgroundColor:'lightgray'}}>
                      <div className='card-text' style={changePanels}>
                        <p className='card-title text-center'>Tens</p>
                        <p className='change card-subtitle text-center text-muted'>{this.state.tens}</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-3'>
                    <div className='card mb-1' style={{backgroundColor:'lightgray'}}>
                      <div className='card-text' style={changePanels}>
                        <p className='card-title text-center'>Fives</p>
                        <p className='change card-subtitle text-center text-muted'>{this.state.fives}</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-3'>
                    <div className='card mb-1' style={{backgroundColor:'lightgray'}}>
                      <div className='card-text' style={changePanels}>
                        <p className='card-title text-center'>Ones</p>
                        <p className='change card-subtitle text-center text-muted'>{this.state.ones}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='container'>
                <div className='form-group row mb-3'>
                  <div className='col-3'>
                    <div className='card mb-1' style={{backgroundColor:'lightgray'}}>
                      <div className='card-text' style={changePanels}>
                        <p className='card-title text-center'>Quarters</p>
                        <p className='change card-subtitle text-center text-muted'>{this.state.quarters}</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-3'>
                    <div className='card mb-1' style={{backgroundColor:'lightgray'}}>
                      <div className='card-text' style={changePanels}>
                        <p className='card-title text-center'>Dimes</p>
                        <p className='change card-subtitle text-center text-muted'>{this.state.dimes}</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-3'>
                    <div className='card mb-1' style={{backgroundColor:'lightgray'}}>
                      <div className='card-text' style={changePanels}>
                        <p className='card-title text-center'>Nickels</p>
                        <p className='change card-subtitle text-center text-muted'>{this.state.nickels}</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-3'>
                    <div className='card mb-1' style={{backgroundColor:'lightgray'}}>
                      <div className='card-text' style={changePanels}>
                        <p className='card-title text-center'>Pennies</p>
                        <p className='change card-subtitle text-center text-muted'>{this.state.pennies}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
