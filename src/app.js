import React from 'react'import ReactDOM from 'react-dom'class Hello extends React.Component {  constructor (props) {    super(props);    this.state = {      msg: <p>今天是个好日子</p>,      list: [1, 2, 4, 5],      name: props.name    }    this.handleInput = this.handleInput.bind(this)  }  handleInput (e) {    this.setState({name: e.target.value})  }  render () {    const listItems = this.state.list.map((item, index)=> <li key={item}>{item}</li>)    return (      <div>        <input type="text" value={this.state.name} onChange={this.handleInput}/>        <h1>          Hello {this.state.name}        </h1>        {this.state.msg}        <ul>{listItems}</ul>      </div>    )  }}ReactDOM.render(<Hello name="React"/>, document.querySelector('#app'));