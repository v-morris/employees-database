import React, { Component } from 'react'
import axios from 'axios'
import '../App.css'

class Update extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: this.props.first_name,
            last_name: this.props.last_name,
            title: this.props.title,
            manager_id: this.props.manager_id,
            id: this.props.id
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    }
    
    updateEmployee = () => {
        
    axios.put(
        `http://localhost:3001/api/v1/employees/${this.props.id}`,
        {
            id: this.state.id,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            title: this.state.title,
            manager_id: this.state.manager_id
        })

      .then(response => {
        console.log(response)
        console.log("TITLE" + this.state.title)
        alert('Employee Information Updated')
        window.location.reload();
      })
      .catch(error => console.log(error))
    }


    render() {
        return (
            <div >
                <h4>Edit fields and submit changes.</h4>
                <label>First Name: </label><input type="text" name="first_name" onChange={this.onChange} placeholder="First Name" defaultValue={this.props.first_name} required />
                <label>Last Name: </label><input type="text" name="last_name" onChange={this.onChange} placeholder="Last Name" defaultValue = {this.props.last_name} required />
                <label>Title </label><input type="text" name="title" onChange={this.onChange} placeholder="Title" defaultValue={this.props.title} required />
                <label>Manager ID: </label><input type="text" name="manager_id" onChange={this.onChange} placeholder="Manager ID" defaultValue = {this.props.manager_id} required />
                <button className="updateEmployeeButton" onClick={this.updateEmployee}>
                    Update Employee
                </button>
            </div>
        )
    }
}
export default Update



