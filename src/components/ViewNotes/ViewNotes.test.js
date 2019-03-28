import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ViewNotes from "./ViewNotes";


it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <ViewNotes />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });