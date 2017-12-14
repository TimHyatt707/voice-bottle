import React from "react";
import { Actions } from "react-native-router-flux";
import LoginPageLayout from "./LoginPageLayout";
import Header from "./HeaderComponent";
import LoginForm from "./LoginForm";

export default function LoginPage({ onLoginUser }) {
  return (
    <LoginPageLayout>
      <Header title={"Login"} />
      <LoginForm onLoginUser={onLoginUser} />
    </LoginPageLayout>
  );
}
