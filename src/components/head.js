import React from 'react'
import template from './head.jsx'

class Header extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      title: <h1>aaaa</h1>
    }

  }

  render () {
    return template.call(this, this)
  }
}

export default Header