import Config from "react-native-config";

export default function deletePin(id, token) {
  return fetch(`${Config.REACT_APP_BASE_URL}/pins/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`
    }
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
      console.log(error.message);
      return error;
    });
}
