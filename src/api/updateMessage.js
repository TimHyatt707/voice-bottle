import Config from "react-native-config";

export default function createUser(id, message, token) {
  return fetch(`${Config.REACT_APP_BASE_URL}/pins/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`
    },
    body: JSON.stringify(message)
  })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else throw new Error("Internal Server Error");
    })
    .then(record => {
      return record;
    })
    .catch(error => {
      return null;
    });
}
