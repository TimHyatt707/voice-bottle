import deletePin from "../../api/deletePin";

export default function deletePinProcess(id, token) {
  return async (dispatch, getState) => {
    try {
      if (token === null) {
        throw new Error("No token");
      }
      const deletedPin = await deletePin(id, token);
      dispatch({ type: "DELETE_PIN", deletedPin });
      return deletedPin;
    } catch (error) {
      return error;
    }
  };
}
