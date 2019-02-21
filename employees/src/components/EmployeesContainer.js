import React, { Component } from 'react'
import axios from 'axios'
import Employee from './Employee'
import Update from './Update'
import '../App.css'

class EmployeesContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            root: [],
            first_name: '',
            last_name: '',
            title: '',
            manager_id: '',
            id: '',
            showUpdate: false
        }

        this.findEmployee = this.findEmployee.bind(this);
        
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    }

   

    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/employees.json')
            .then(response => {
                console.log(response)
                this.setState({ root: response.data })
                console.log(this.state.root)
            })
            .catch(error => console.log(error))
    }

    addNewEmployee = () => {
        axios.post(
            'http://localhost:3001/api/v1/employees',
            {
                id:window.crypto.getRandomValues(new Uint16Array(1))[0],
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                title: this.state.title,
                manager_id: this.state.manager_id
            }
        )
            .then(response => {
                console.log(response)
                alert('New Employee Added')
                window.location.reload();
            })
            .catch((error)=>{
                alert("ID Generation Duplicate. Please Try Again.")
            });
    }

    deleteEmployee = () => {
        axios.delete(`http://localhost:3001/api/v1/employees/${this.state.id}`,
            {
                id: this.state.id
            }
        )
            .then(response => {
                console.log(response)
                alert('Employee Deleted')
                window.location.reload();
            })
            .catch(error => console.log(error))
    }

    findEmployee = () => {
        axios.get(`http://localhost:3001/api/v1/employees/${this.state.id}`,
            {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                title: this.state.title,
                manager_id: this.state.manager_id
            })
            .then(response => {
                this.setState({
                    showUpdate: true,
                    first_name: response.data.first_name,
                    last_name: response.data.last_name,
                    title: response.data.title,
                    manager_id: response.data.manager_id,
                    id: response.data.id
                })
                console.log("NAME" + this.state.first_name, this.state.last_name, this.state.title, this.state.manager_id)
                console.log(response)
            })
            .catch(error => console.log(error))

    }

    render() {

        return (
            <div className="container">
                <div className="top-half">

                <div className="section-2">
                    <h3>ADD NEW EMPLOYEES</h3>
                    <label>First Name: </label>
                    <input type="text" name="first_name" onChange={this.onChange} placeholder="First Name" required />
                    <label>Last Name: </label>
                    <input type="text" name="last_name" onChange={this.onChange} placeholder="Last Name" required />
                    <label>Title: </label>
                    <input type="text" name="title" onChange={this.onChange} placeholder="Title" required /> 
                    <label>Manager ID: </label>
                    <input type="text" name="manager_id" onChange={this.onChange} placeholder="Manager ID" required /> 
                    <button className="formButton" onClick={this.addNewEmployee}>
                        Add New Employee
                    </button>
                    </div>
                    <div className="section-1">
                    <h3>UPDATE EMPLOYEES</h3>
                    
                    <label>Employee ID: </label>
                    <input type="text" name="id" onChange={this.onChange} placeholder="Employee ID Number" required />
                    <button className="formButton" onClick={this.findEmployee}>
                        Find Employee
                    </button>
                    {this.state.showUpdate ? <Update first_name={this.state.first_name} last_name={this.state.last_name} title={this.state.title} manager_id={this.state.manager_id} id={this.state.id} /> : null}
                    </div>

                   
                    
                    <div className="section-3">
                    <h3>DELETE EMPLOYEES</h3>
                    <label>Employee ID: </label>
                    <input type="text" name="id" onChange={this.onChange} placeholder="Employee ID Number" required />

                    <button className="formButton" onClick={this.deleteEmployee}>
                        Delete Employee
                    </button>
                </div>
                </div>
                <div className="bottom-half">
                <div className="empList">
                <h1>List of Employees</h1>
                    {
                        
                        this.state.root.map(function (root) {//CEO
                            return (
                                <Employee root={root} key={root.id} />
                            )
                        })
                    }
                </div>
            </div>
            </div>
        )
    }
}
export default EmployeesContainer