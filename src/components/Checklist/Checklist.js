import React, { Component } from "react";
import CheckBox from "./CheckBox";
import "./Checklist.css";
import WalkedChecklist from "./WalkedChecklist";
import { Section, Button } from "../../components/Utils/Utils";
// import ChecklistApiService from "../../services/checklist-api-service";

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


// export default class Checklist extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       meals: null,
//       walks: null,

//       mealOptions: ["Breakfast", "Lunch", "Dinner"],
//       walkOptions: ["morning", "afternoon", "night"]
//     };
//     // this.handleCheckBox = this.handleSubmit.bind(this);
//     // this.handleFormSubmit = this.handleFormSubmit.bind(this);
//   }

//   componentDidMount() {
//     ChecklistApiService.getAllChecked("eaten").then(value => {
//       this.setState({
//         meals: value
//       });
//     });
//   }

//   handleFormSubmit = e => {
//     e.preventDefault();
//     const mealsData = this.state.meals;
//     const walksData = this.state.walks;
//     ChecklistApiService.postChecked("eaten").then(value => {
//       this.setState({
//         meals: value
//       });
//       console.log(value);
//     });
//   };

//   handleCheckBox(e) {
//     const newSelection = e.target.value;
//     let newSelectionArray;

//     this.setState({
//       meals: newSelection
//     });

//     // if (this.state.meals.indexOf(newSelection) > -1) {
//     //   newSelectionArray = this.state.meals.filter(s => s !== newSelection);
//     // } else {
//     //   newSelectionArray = [...this.state.meals, newSelection];
//     // }

//     // this.setState(prevState => ({
//     //   meals: { ...prevState, meals: newSelectionArray },
//     //   walks: { ...prevState, walks: newSelectionArray }
//     // }));
//   }

//   // clear the state
//   handleClearForm(e) {
//     // e.preventDefault();
//     this.setState({
//       meals: '',
//     });
//   }

//   render() {
//     let form;
//     if (this.state.meals) {
//       form = (
//         <form onSubmit={e => this.handleFormSubmit(e)}>
//           <ul>
//             {this.state.mealOptions.map((meals, index) => {
//               return (
//                 <CheckBox
//                   value={meals}
//                   name={meals}
//                   options={this.state.mealOptions}
//                   selectedOptions={this.state.meals}
//                   handleChange={this.handleCheckBox.bind(this)}
//                 />
//               );
//             })}
//           </ul>
//           <Button type="submit" className="formSubmitButton">
//             Survived the day
//           </Button>
//         </form>
//       );
//     } else {
//       form = (
//       <>
//       <div>Dog has eaten</div>
//       <Button onClick={this.handleClearForm} className="formSubmitButton">
//       Survived the day
//     </Button>
//     </>)
//     }

//     return (
//       <React.Fragment>
//         <Section className="checkList">
//           <header>
//             <h3>Have they eaten?</h3>
//           </header>
//           {form}
//         </Section>
//         <WalkedChecklist />
//       </React.Fragment>
//     );
//   }
// }