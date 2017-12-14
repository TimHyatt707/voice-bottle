export default function getLocationProcess() {
  return async (dispatch, getState) => {
    try {
      navigator.geolocation.getCurrentPosition(
        position => {
          let coords = {};
          coords.latitude = position.coords.latitude;
          coords.longitude = position.coords.longitude;
          dispatch({ type: "SET_COORDS", coords });
        },
        error => {
          console.log(error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 20000
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
}