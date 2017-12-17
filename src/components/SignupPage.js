import React from "react";
import SignupPageLayout from "./SignupPageLayout";
import Header from "./HeaderComponent";
import SignupForm from "./SignupForm";

export default function SignupPage({ onCreateUser }) {
  return (
    <SignupPageLayout>
      <Header title="Signup" hasBack={true} />
      <SignupForm onCreateUser={onCreateUser} />
    </SignupPageLayout>
  );
}
