import React, { Component} from 'react';
import Header from './Header';
import SubHeader from './SubHeader';
import Hello from './Hello'

class Wrapper extends Component {
  render() {
    return (
      <div>
        <Header />
        <SubHeader />
          <Hello name='Jimmy' />
      </div>
    );
  }
}

export default Wrapper;
