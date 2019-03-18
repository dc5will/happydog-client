import React, { Component } from 'react';
import './Checklist.css'

const Checkbox = props => (
    <input type='checkbox' {...props} />
)

export default class Checklist extends Component {
    state = { checked: false }

    handleCheckboxChange = event => 
        this.setState({
            checked: event.target.checked
        })

    render() {
        return (
            <React.Fragment>
            <div>
                <header>
                    <h4>Has your dog eaten?</h4>
                </header>
                <label>
                    <Checkbox
                        checked={this.state.checked}
                        onChange={this.handleCheckboxChange}
                        />
                        <span>Breakfast</span>
                </label><br/>
                <label>
                    <Checkbox
                        // checked={this.state.checked}
                        // onChange={this.handleCheckboxChange}
                        />
                        <span>Lunch</span>
                </label><br/>
                <label>
                    <Checkbox
                        // checked={this.state.checked}
                        // onChange={this.handleCheckboxChange}
                        />
                        <span>Dinner</span>
                </label>
            </div>
            <header>
            <h4>Have you walked your dog?</h4>
                </header>
                <label>
                    <Checkbox
                        checked={this.state.checked}
                        onChange={this.handleCheckboxChange}
                        />
                        <span>Morning</span>
                </label><br/>
                <label>
                    <Checkbox
                        // checked={this.state.checked}
                        // onChange={this.handleCheckboxChange}
                        />
                        <span>Afternoon</span>
                </label><br/>
                <label>
                    <Checkbox
                        // checked={this.state.checked}
                        // onChange={this.handleCheckboxChange}
                        />
                        <span>Night time</span>
                </label>
                </React.Fragment>
        );
    }
}
