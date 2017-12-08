import loginUser from "./../../api/loginUser";

export default function loginUserProcess(credentials) {
  return async (dispatch, getState) => {
    try {
      const authentication = await loginUser(credentials);
      await AsyncStorage.setItem("token", authentication.token);
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
