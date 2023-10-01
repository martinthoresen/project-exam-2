export function displayMessage(target, message, type) {
  target.innerText = message;
  target.classList.add(`text-${type}`);
}
