import React from 'react'

class Footer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      title: <h1>footer</h1>
    }

  }

  render () {
    return this.state.title
  }
}

export default Footer