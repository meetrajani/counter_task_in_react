import React, { Component } from 'react';
import Breakfast from './container/Breakfast';
import Lunch from './container/Lunch';
import Dinner from './container/Dinner';
import './App.css';

export default class Explorer extends Component {
  constructor() {
    super();

    this.state = {
      newcurdate: new Date().toLocaleTimeString(),
      break: '',
    };
  }
  
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        newcurdate: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const time = new Date().getHours(); // Get the current hour of the day

    return (
      <div className='Time'>
        <div className="container">
          <div className="row">
            <div className="col data">
              <table className='table' border={2}>
                <tr>
                  <td><h2>Name: Meet</h2></td>
                </tr>
                <tr>  
                  <td>
                    <h1>Current Time: {this.state.newcurdate}</h1>
                    {time === 19 && <Breakfast />}
                    {time === 20 && <Lunch />}
                    {time === 21 && <Dinner />}
                  </td>
                </tr>
              </table>  
            </div>
          </div>
        </div>
      </div>
    );
  }
}