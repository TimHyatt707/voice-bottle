export default function getAuthenticationProcess() {
  return async (dispatch, getState) => {
    try {
      let token = await AsyncStorage.getItem("token");
      if (!token) {
        return null;
      } else {
        dispatch({ type: "SET_TOKEN", token });
      }
    } catch (error) {
      return null;
    }
  };
}
