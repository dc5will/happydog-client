import React from "react";
import { shallow } from "enzyme";
import Note from "./Note";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe(`Note component`, () => {
  it("renders without crashing", () => {
    shallow(<Note note={{name: test, id: 1}}/>);
  });
});
