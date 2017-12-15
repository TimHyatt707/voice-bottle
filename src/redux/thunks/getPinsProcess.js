import getPins from "../../api/getPins";

export default function getPinsProcess(id, token) {
  return async (dispatch, getState) => {
    try {
      let pins = await getPins(id, token);
      dispatch({ type: "SET_PINS", pins });
      return pins;
    } catch (error) {
      return error;
    }
  };
}
