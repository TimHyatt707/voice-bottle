import Config from "react-native-config";

export default function loginUser(credentials) {
  return fetch(`${Config.REACT_APP_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 400) {
        throw new Error("Invalid username/password");
      } else throw new Error("Login Failed");
    })
    .then(record => {
      return {
        token: record.authentication.token
      };
    });
}
