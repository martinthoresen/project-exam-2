import { displayMessage } from "../utility/displayMessage";

async function registerUser(url, userData) {
  const registerContainer = document.querySelector("#register-container");
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    const response = await fetch(url, postData);
    const json = await response.json();

    if (response.ok) {
      displayMessage(registerContainer, "Success! You can now log in.", "success");
      window.location.replace("/login");
    } else {
      console.log(response);
      displayMessage(registerContainer, json.errors[0].message, "danger");
    }
  } catch (error) {
    console.log(error);
  }
}

export default registerUser;
