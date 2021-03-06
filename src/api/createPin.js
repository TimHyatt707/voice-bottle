import Config from "react-native-config";

export default function createPin(id, token, pin) {
  return fetch(`${Config.REACT_APP_BASE_URL}/users/${id}/pins`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`
    },
    body: JSON.stringify(pin)
  })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else throw new Error("Something went wrong");
    })
    .then(record => {
      return record;
    })
    .catch(error => {
      return error;
    });
}
