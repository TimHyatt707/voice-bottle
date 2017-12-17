export default function watchLocationProcess() {
  return async (dispatch, getState) => {
    try {
      let id = navigator.geolocation.watchPosition(
        position => {
          let coords = {};
          coords.latitude = position.coords.latitude;
          coords.longitude = position.coords.longitude;
          dispatch({ type: "SET_COORDS", coords });
          navigator.geolocation.clearWatch(id);
        },
        error => {
          console.log(error.message);
        },
        {
          enableHighAccuracy: true,
          maximumAge: 30000,
          timeout: 27000
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
}
