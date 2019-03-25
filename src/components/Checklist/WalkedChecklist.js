import React, { Component } from "react";
import CheckBox from "./CheckBox";
import { Section, Button } from "../../components/Utils/Utils";

export default class WalkedChecklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      walked: [
        { id: 1, value: "Morning", isChecked: false },
        { id: 2, value: "Afternoon", isChecked: false },
        { id: 3, value: "Night", isChecked: false }
      ]
    };
  }

  handleAllWalkedChecked = event => {
    let walked = this.state.walked;
    walked.forEach(walk => (walk.isChecked = event.target.checked));
    this.setState({ walked: walked });
  };

  handleCheckedElement = event => {
    let walked = this.state.walked;
    walked.forEach(walk => {
      if (walk.value === event.target.value)
        walk.isChecked = event.target.checked;
    });
    this.setState({ walked: walked });
  };

  render() {
    return (
      <React.Fragment>
        <header>
          <h3>Have they been walked?</h3>
        </header>
        <div className="checkList">
          <ul>
            {this.state.walked.map((walked, index) => {
              return (
                <CheckBox
                  key={index}
                  handleCheckedElement={this.handleCheckedElement}
                  {...walked}
                />
              );
            })}
          </ul>
          <Button className="resetButton" onClick={this.handleAllWalkedChecked}>
            Successfully Walked
          </Button>
        </div>
      </React.Fragment>
    );
  }
}
