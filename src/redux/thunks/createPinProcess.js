import createPin from "../../api/createPin";

export default function createPinProcess(id, pin, token) {
  return async (dispatch, getState) => {
    try {
      if (token === null) {
        throw new Error("No token");
      }
      pin.user_id = id;
      const createdPin = await createPin(id, token, pin);
      dispatch({ type: "ADD_PIN", createdPin });
      return createdPin;
    } catch (error) {
      return error;
    }
  };
}
