import React from "react";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Header from "../../src/components/HeaderComponent";

storiesOf("Header", module).add("Login label", () => (
  <Header headerLabel="Login" />
));
