import { loadKey } from "../storage/localStorage";
import { displayMessage } from "../utility/displayMessage";

async function updateProfile(url, data) {
  const updateContainer = document.querySelector("#update-container");
  const token = loadKey("accessToken");
  try {
    const postData = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify(data),
    };

    const response = await fetch(url, postData);
    const json = await response.json();

    if (response.ok) {
      console.log(response);
      console.log(data);
      displayMessage(updateContainer, "Your profile was successfully updated!", "success");
    } else {
      console.log(response);
      displayMessage(updateContainer, json.errors[0].message, "danger");
    }
  } catch (error) {
    console.log(error);
  }
}

export default updateProfile;
