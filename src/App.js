import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

class App extends Component {
  render() {
    return (
  <section class="section">
    <div class="container is-fluid">
      <h1 class="title">
        Подготовьте претензию на пять минут 
      </h1>
      <p class="subtitle">
        My first website with <strong>Bulma</strong>!
      </p>
      <div className="columns">
        <div className="column">
          <Form />
          	
        </div>
        <div className="column">
          <div style={{ backgroundColor: 'lightgray', padding: '15px' }}>
            7,15 (семь) бел. рублей 15 копеек
          </div>
          <img src="https://www.dropbox.com/s/6334m3sijvj5upt/IMG_3103%202.JPG?dl=0&raw=1" />
          image  	
        </div>
      </div>
    </div>
  </section>
    );
  }
}

export default App;
