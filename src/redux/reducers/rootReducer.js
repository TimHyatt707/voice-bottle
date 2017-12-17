export default function rootReducer(
  currentState = {
    id: null,
    markers: [],
    latitude: null,
    longitude: null
  },
  action
) {
  switch (action.type) {
    case "SET_AUTHORIZATION":
      return {
        ...currentState,
        id: action.id
      };
    case "SET_TOKEN":
      return {
        ...currentState,
        token: action.token
      };
    case "SET_MARKERS":
      return {
        ...currentState,
        markers: action.markers
      };
    case "SET_COORDS":
      return {
        ...currentState,
        latitude: action.coords.latitude,
        longitude: action.coords.longitude
      };
    case "ADD_PIN":
      return {
        ...currentState,
        markers: [...currentState.markers, action.createdPin]
      };
    case "DELETE_PIN":
      return {
        ...currentState,
        markers: currentState.markers.filter(
          marker => marker.id !== action.deletedPin.id
        )
      };
    default:
      return currentState;
  }
}
