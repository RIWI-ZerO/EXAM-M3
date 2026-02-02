import { getSession } from "../src/state.js";

export function authGuard(view, role) {
  const session = getSession();

  if (!session) {
    location.hash = "/";
    return;
  }

  if (session.role !== role) {
    location.hash = "/";
    return;
  }

  view();
}