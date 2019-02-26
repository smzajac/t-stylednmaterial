import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withTheme } from 'styled-components';
import styled from 'styled-components';
import Holder from './Components/Holder';
import Button from './Components/Button';


class App extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Button name="I am a component" color="primary"></Button>
        <Button name="Hello" color="secondary"></Button>
       <Holder/>
      </div>
    );
  }
}

export default withTheme(App);
