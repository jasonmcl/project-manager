import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout2';
import { Home } from './components/Home2'

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
      </Layout>
    );
  }
}
