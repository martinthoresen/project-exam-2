import { saveKey } from "../storage/localStorage.js";
import { displayMessage } from "../utility/displayMessage.js";
import baseUrl from "../utility/constants/baseUrl.js";
export const loginUrl = `${baseUrl}/holidaze/auth/login`;

async function loginUser(url, data) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, postData);
    const json = await response.json();
    const loginContainer = document.querySelector("#login-container");
    if (response.ok === true) {
      const accessToken = json.accessToken;
      saveKey("accessToken", accessToken);
      saveKey("data", json);
      window.location.replace("/");
    } else {
      displayMessage(loginContainer, json.errors[0].message, "danger");
    }
  } catch (error) {
    console.log(error);
  }
}

export default loginUser;
