import React from 'react';
import { hot } from 'react-hot-loader/root';
import IPFS from 'ipfs-mini';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
          <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        )
    }
}

function App() {
  return (
    <div>
        <Clock />
    </div>
  );
};


export default hot(App);

