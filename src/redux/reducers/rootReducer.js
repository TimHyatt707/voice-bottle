export default function rootReducer(
  currentState = {
    token: null
  },
  action
) {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...currentState,
        token: action.token
      };
    default:
      return currentState;
  }
}
