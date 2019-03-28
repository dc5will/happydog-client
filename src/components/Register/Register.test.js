import React from "react";
import { shallow } from "enzyme";
import Register from "./Register";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe(`Register component`, () => {
  it("renders without crashing", () => {
    shallow(<Register />);
  });

  it("renders the UI as expected", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Register />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});