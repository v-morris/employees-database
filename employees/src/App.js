import React, { Component } from 'react'
import './App.css'
import EmployeesContainer from './components/EmployeesContainer'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          Employee Database
        </div>
        <EmployeesContainer />
        
      </div>
      
    );
  }
}



export default App