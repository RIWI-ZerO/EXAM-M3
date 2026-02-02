// State Management
export const state = {
    // Initialize user directly from localStorage
    user: JSON.parse(localStorage.getItem('user')) || null
};

export function setUser(userData) {
    state.user = userData;

    if (userData) {
        // Always ensure we don't save sensitive data like plain passwords
        localStorage.setItem('user', JSON.stringify(userData));
    } else {
        localStorage.clear(); // Or specifically localStorage.removeItem('user');
    }
}

export function isAuthenticated() {
    return state.user !== null;
}

export function saveSession(user) {
  localStorage.setItem("session", JSON.stringify(user));
}

export function getSession() {
  return JSON.parse(localStorage.getItem("session"));
}

export function clearSession() {
  localStorage.removeItem("session");
}