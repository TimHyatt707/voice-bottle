import createPin from "../../api/createPin";
import { AsyncStorage } from "react-native";

export default function createPinProcess(id, pin, token) {
  return async (dispatch, getState) => {
    try {
      console.log(id, pin, token);
      if (token === null) {
        throw new Error("No token");
      }
      pin.user_id = id;
      const createdPin = await createPin(id, token, pin);
      return createdPin;
    } catch (error) {
      return error;
    }
  };
}
