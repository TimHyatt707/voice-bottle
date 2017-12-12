import getNearbyMarkers from "../../api/getNearbyMarkers";

export default function getNearbyMarkersProcess(coords) {
  return async (dispatch, getState) => {
    try {
      let markers = await getNearbyMarkers(coords);
      dispatch({ type: "SET_MARKERS", markers });
    } catch (error) {
      console.log(error.message);
    }
  };
}
