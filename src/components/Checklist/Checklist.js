import React, { Component } from 'react';
import CheckBox from '../CheckBox/CheckBox';
import './Checklist.css'


export default class Checklist extends Component {
    constructor(props) {
        super(props)
        this.state = {
          tasks: [
            {id: 1, value: "Breakfast", isChecked: false},
            {id: 2, value: "Lunch", isChecked: false},
            {id: 3, value: "Dinner", isChecked: false}
          ]
        }
      }
      
      handleAllChecked = (event) => {
        let tasks = this.state.tasks
        tasks.forEach(task => task.isChecked = event.target.checked) 
        this.setState({tasks: tasks})
      }
    
      handleCheckedElement = (event) => {
        let tasks = this.state.tasks
        tasks.forEach(task => {
           if (task.value === event.target.value)
              task.isChecked =  event.target.checked
        })
        this.setState({tasks: tasks})
      }
    
      render() {
        return (
          <div className="Checklist">
          <header>
            <h3>Have they eaten?</h3>
        </header>
            <ul>
            {
              this.state.tasks.map((tasks, index) => {
                return (<CheckBox key={index} handleCheckedElement={this.handleCheckedElement}  {...tasks} />)
              })
            }
            </ul>
            <button className='resetButton' onClick={this.handleAllChecked}>Survived the day</button>
          </div>
        );
      }
    }
    
