import React from 'react'import ReactDOM from 'react-dom'import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'import Header from './components/head'import Footer from './components/foot'import { General } from './components/index'class App extends React.Component {  constructor (props) {    super(props);  }  render () {    return (      <div>        <h1>ANTD</h1>        <a href="http://127.0.0.1/react-app/index.html">回去</a>        <ul>          <li><Link to="/">index</Link></li>          <li><Link to="/general">general</Link></li>          <li><Link to="/footer">footer</Link></li>        </ul>        {this.props.children}      </div>    )  }}const About = () => (  <div>About</div>)const Index = () => (  <div>Index</div>)const NoMatch = () => (  <div>NoMatch</div>)ReactDOM.render(  <Router history={browserHistory}>    <Route path="/" component={App}>      <IndexRoute component={Index}/>      <Route path="/general" component={General}>              </Route>      <Route path="/footer" component={Footer}/>      <Route path="*" component={NoMatch}/>    </Route>  </Router>  , document.querySelector('#app'));