import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe(`LandingPage component`, () => {
  it("renders without crashing", () => {
    shallow(<Footer />);
  });

  it("renders the UI as expected", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
