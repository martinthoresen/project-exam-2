import { clearStorage } from "../storage/localStorage";

export function logoutUser() {
  clearStorage();
  window.location.replace("/login");
}
