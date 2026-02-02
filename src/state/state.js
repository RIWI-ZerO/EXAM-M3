// State Management
export const state = {
    user: JSON.parse(localStorage.getItem('user')) || null
};

export function setUser(userData) {
    state.user = userData;
    if (userData) {
        localStorage.setItem('user', JSON.stringify(userData));
    } else {
        localStorage.removeItem('user');
    }
}


