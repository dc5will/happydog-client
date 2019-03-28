import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Header component", () => {
  it("renders without crashing", () => {
    shallow(<Header />);
  });

  it("renders the UI as expected", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
