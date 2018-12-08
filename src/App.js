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
      <Form />
    </div>
  </section>
    );
  }
}

export default App;
