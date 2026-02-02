import { getSession } from "../utils/storage.js";

export function profileView() {
  const user = getSession();
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="container mt-5">
      <h2>Profile</h2>
      <p>Name: ${user.name}</p>
      <p>Email: ${user.email}</p>
    </div>
  `;
}