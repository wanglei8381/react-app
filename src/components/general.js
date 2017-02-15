import React from 'react'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

const General = () => (
  <ul>
    <li><Link to="/btn">button</Link></li>
    <li><Link to="/icon">icon</Link></li>
  </ul>
)

export { General }