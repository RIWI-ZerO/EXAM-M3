import { apiFetch } from "../api.js";

export async function adminDashboardView() {
  const tasks = await apiFetch("/tasks");

  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="container mt-4">
      <h2>Admin Dashboard</h2>
      <p>Total tasks: ${tasks.length}</p>
    </div>
  `;
}