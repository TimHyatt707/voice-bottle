import updateMessage from "../../api/updateMessage";

export default function updateMessageProcess(id, message, token) {
  return async (dispatch, getState) => {
    try {
      const updatedMessage = await updateMessage(id, message, token);
      dispatch({ type: "UPDATE_PIN", updatedMessage });
      return updatedMessage;
    } catch (error) {
      return null;
    }
  };
}
