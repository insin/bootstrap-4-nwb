import React from 'react'

import Blog from './Blog'
import LoadingButton from './LoadingButton'

export default class App extends React.Component {
  render() {
    return <div>
      <div class="container">
        <h2>Welcome to React</h2>
        <div class="btn-group" role="group" aria-label="Example buttons">
          <LoadingButton>Not Loading Button</LoadingButton>
          <LoadingButton loading>Loading Button</LoadingButton>
          <LoadingButton bsStyle="info">Jelly Button</LoadingButton>
        </div>
      </div>
      <hr/>
      <Blog/>
    </div>
  }
}
