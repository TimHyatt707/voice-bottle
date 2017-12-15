import Config from "react-native-config";

export default function getPins(id, token) {
  return fetch(`${Config.REACT_APP_BASE_URL}/users/${id}/pins`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`
    }
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
