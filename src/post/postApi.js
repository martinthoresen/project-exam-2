import { loadKey } from "../storage/localStorage";
import { displayMessage } from "../utility/displayMessage";

async function postApi(url, userData, container) {
  const token = loadKey("accessToken");
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    };

    const response = await fetch(url, postData);
    const json = await response.json();

    if (response.ok) {
      displayMessage(container, "Success!", "success");
    } else {
      console.log(response);
      displayMessage(container, json.errors[0].message, "danger");
    }
  } catch (error) {
    console.log(error);
  }
}

export default postApi;
