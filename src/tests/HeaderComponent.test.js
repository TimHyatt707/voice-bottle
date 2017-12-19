import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import HeaderComponent from "./../components/HeaderComponent.js";

const shallowWrapper = shallow(
  <HeaderComponent pageTitle={pageTitle} pages={pages} />
);

describe("HeaderComponent", () => {
  it("Views", () => {
    const header = renderer.create(<HeaderComponent />).toJSON();
    expect(header.find("Header")).toHaveLength(1);
  });
});
