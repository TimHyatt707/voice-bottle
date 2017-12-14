import loginUser from "./../../api/loginUser";
import { AsyncStorage } from "react-native";

export default function loginUserProcess(credentials) {
  return async (dispatch, getState) => {
    try {
      const authentication = await loginUser(credentials);
      const id = authentication.id;
      const token = authentication.token;
      dispatch({ type: "SET_TOKEN", token });
      dispatch({ type: "SET_AUTHORIZATION", id });
      return authentication;
    } catch (error) {
      if (error.message === "Invalid username/password") {
        return "Invalid username/password";
      } else {
        return "Login Failed";
      }
    }
  };
}
