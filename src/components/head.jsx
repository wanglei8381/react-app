import React from 'react'

export default (cxt) => (
  <div>
    <h1>{cxt.props.name}</h1>
    {cxt.state.title}
  </div>
)