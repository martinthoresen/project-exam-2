import { loadKey } from "../storage/localStorage";

export function CheckIfLoggedIn() {
  const token = loadKey("accessToken");
  if (token) {
    return true;
  } else {
    return false;
  }
}
