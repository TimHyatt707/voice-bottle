import Config from "react-native-config";

export default function createUser(user) {
  return fetch(`${Config.REACT_APP_BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status == 400) {
        throw new Error("Username and email must be unique");
      } else throw new Error("Internal Server Error");
    })
    .then(record => {
      return {
        id: record.id,
        username: record.username,
        email: record.email
      };
    })
    .catch(error => {
      return error;
    });
}
