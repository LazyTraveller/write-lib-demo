import React , { Component } from 'react'
/**  "react-lib-test": "link:.." 手动添加到package.json */
import Create from 'react-lib-test' 
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1> hello, World, React web app </h1>
        <h2> 
          <Create name={'hollo lib'} />
        </h2>
      </div>
    )
  }
}

export default App