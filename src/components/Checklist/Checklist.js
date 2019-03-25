import React, { Component } from "react";
import CheckBox from "./CheckBox";
import "./Checklist.css";
import WalkedChecklist from "./WalkedChecklist";
import { Section, Button } from '../../components/Utils/Utils';

export default class Checklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, value: "Breakfast", isChecked: false },
        { id: 2, value: "Lunch", isChecked: false },
        { id: 3, value: "Dinner", isChecked: false }
      ]
    };
  }

  handleAllTasksChecked = event => {
    let tasks = this.state.tasks;
    tasks.forEach(task => (task.isChecked = event.target.checked));
    this.setState({ tasks: tasks });
  };

  handleCheckedElement = event => {
    let tasks = this.state.tasks;
    tasks.forEach(task => {
      if (task.value === event.target.value)
        task.isChecked = event.target.checked;
    });
    this.setState({ tasks: tasks });
  };

  render() {
    return (
      <React.Fragment>
        <Section className="checkList">
          <header>
            <h3>Have they eaten?</h3>
          </header>
          <ul>
            {this.state.tasks.map((tasks, index) => {
              return (
                <CheckBox
                  key={index}
                  handleCheckedElement={this.handleCheckedElement}
                  {...tasks}
                />
              );
            })}
          </ul>
          <Button className="resetButton" onClick={this.handleAllTasksChecked}>
            Survived the day
          </Button>
        </Section>
        <WalkedChecklist />
      </React.Fragment>
    );
  }
}
