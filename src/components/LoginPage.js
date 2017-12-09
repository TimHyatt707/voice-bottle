import React from "react";
import { Text } from "react-native";
import { Actions } from "react-native-router-flux";
import LoginPageLayout from "./LoginPageLayout";
import Header from "./HeaderComponent";
import LoginForm from "./LoginForm";
import { Button } from "native-base";

export default function LoginPage({ token, onLoginUser }) {
  if (token) {
    Actions.map();
  } else
    return (
      <LoginPageLayout>
        <Header title={"Login"} />
        <LoginForm onLoginUser={onLoginUser} />
      </LoginPageLayout>
    );
}
