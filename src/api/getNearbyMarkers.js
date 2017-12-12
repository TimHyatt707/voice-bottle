import Config from "react-native-config";

export default function getNearbyMarkers(coords) {
  return fetch(`${Config.REACT_APP_BASE_URL}/pins`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(coords)
  })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Something went wrong");
      }
    })
    .then(records => {
      return records;
    })
    .catch(error => {
      return error;
    });
}
