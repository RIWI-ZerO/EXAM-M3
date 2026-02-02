import { state, setUser } from './state/state.js';

document.addEventListener('DOMContentLoaded', () => {
    if (!state.user) {
        renderLogin();
    } else {
        renderDashboard();
    }
});

function renderLogin() {
    const app = document.getElementById('app');
    if (!app) return;
    app.innerHTML = `
        <div class="flex items-center justify-center min-h-screen bg-red-500">
            <div class="bg-white p-8 rounded shadow-lg w-96">
                <h1 class="text-2xl font-bold mb-4 text-center">CRUDZASO Login</h1>
                <input type="text" id="username" placeholder="Username" class="w-full p-2 border mb-2">
                <input type="password" id="password" placeholder="Password" class="w-full p-2 border mb-4">
                <button id="loginBtn" class="w-full bg-blue-500 text-white p-2 rounded">Login</button>
            </div>
        </div>
    `;
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', handleLogin);
    }
}

async function handleLogin() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    if (!usernameInput || !passwordInput) return;

    const username = usernameInput.value;
    const password = passwordInput.value;
    
    // Simple mock login logic
    if (username === 'admin@crudsazo.com' && password === '123456') {
        setUser({ name: 'Admin User', role: 'admin', email: username });
        renderDashboard();
    } else {
        alert('Invalid credentials');
    }
}

async function renderDashboard() {
    const app = document.getElementById('app');
    if (!app) return;
    app.innerHTML = `
        <nav class="bg-red-600 text-white p-4 flex justify-between">
            <span class="font-bold">Hello ${state.user ? state.user.name : 'User'}</span>
            <button id="logoutBtn" class="hover:underline">Logout</button>
        </nav>
        <div class="p-8">
            <h2 class="text-xl mb-4">Task Dashboard</h2>
            <div id="task-list" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <!-- Tasks will load here -->
            </div>
        </div>
    `;
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            setUser(null);
            renderLogin();
        });
    }
    loadTasks();
}

async function loadTasks() {
    const container = document.getElementById('task-list');
    if (!container) return;
    container.innerHTML = '<div class="loading-spinner"></div>';
    try {
        // Mock data fetch since we don't have a real /api/tasks endpoint set up yet in the default server
        // In a real scenario, we'd use fetch('/api/tasks')
        const tasks = [
            { id: "1", name: "Create Fax", assignee: "Nail Caffrey", status: "Completed", priority: "Medium" }
        ];
        
        container.innerHTML = '';
        tasks.forEach(task => {
            const card = document.createElement('div');
            card.className = 'bg-white p-4 rounded shadow border border-gray-200';
            card.innerHTML = `
                <h3 class="font-bold text-lg">${task.name}</h3>
                <p class="text-gray-600">Assignee: ${task.assignee}</p>
                <p class="text-gray-600">Status: <span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">${task.status}</span></p>
                <p class="text-gray-600">Priority: ${task.priority}</p>
            `;
            container.appendChild(card);
        });
    } catch (e) {
        container.innerHTML = 'Error loading tasks.';
    }
}