import React from "react";
// import { shallow } from "enzyme";
import NoteDetail from "./NoteDetail";
// import { mount, Enzyme } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
import NotesContext from "../../contexts/NotesContext";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";

// Enzyme.configure({ adapter: new Adapter() });

describe(`NoteDetail component`, () => {
  it("renders without crashing", () => {
    const state = {
      notes: [{ id: 1, name: "testing" }, { id: 2, name: "testing" }]
    };
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <NotesContext.Provider value={state}>
          <NoteDetail match={{ params: { noteId: 1 } }} />
        </NotesContext.Provider>
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  //   it("renders without crashing", () => {
  // const state = {
  //   notes: [{ id: 1, name: "testing" }, { id: 2, name: "testing" }]
  // };
  //     mount(
  //   <MemoryRouter>
  //     <NotesContext.Provider value={state}>
  //       <NoteDetail match={{ params: { noteId: 1 } }} />
  //     </NotesContext.Provider>
  //   </MemoryRouter>
  //     );
  //   });
});
