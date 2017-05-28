import './bootstrap.scss'

import React from 'react'

import Blog from './Blog'

export default class App extends React.Component {
  render() {
    return <div>
      <div class="container">
        <h2>Welcome to React</h2>
        <button class="btn btn-primary">Button</button>
      </div>
      <hr/>
      <Blog/>
    </div>
  }
}
