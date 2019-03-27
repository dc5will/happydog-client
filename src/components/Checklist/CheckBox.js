import React from "react";
import './CheckBox.css';

// export const CheckBox = props => {
//   return (
//     <div>
//       {/* <label for={props.name} className="form-label">
//         {props.title}
//       </label> */}
//       <div className="checkbox-group">
//         {props.meals.map(meal => {
//           return (
//             <label key={meal}>
//               <input
//                 className="form-checkbox"
//                 id={props.name}
//                 name={props.name}
//                 onChange={props.handleChange}
//                 value={meal}
//                 checked={props.selectedOptions.indexOf(meal) > -1}
//                 type="checkbox"
//               />{" "}
//               {meal}
//             </label>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
// export default CheckBox;



export const CheckBox = props => {
  return (
    <li>
      <input
        key={props.id}
        onChange={props.handleCheckedElement}
        type="checkbox"
        checked={props.isChecked}
        value={props.value}
      />
      {props.value}
    </li>
  );
};
export default CheckBox;
