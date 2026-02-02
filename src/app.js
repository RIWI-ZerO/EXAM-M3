import { state, setUser } from './state/state.js';

document.addEventListener('DOMContentLoaded', () => {
    // Check for persisted session in state/localStorage
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
        <div class="flex items-center justify-center min-h-screen bg-slate-100">
            <div class="bg-white p-8 rounded shadow-xl w-96">
                <h1 class="text-2xl font-bold mb-6 text-center text-blue-600">CRUDTASK Login</h1>
                <div class="space-y-4">
                    <input type="email" id="email" placeholder="Email (e.g., admin@test.com)" class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none">
                    <input type="password" id="password" placeholder="Password" class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none">
                    <button id="loginBtn" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded transition duration-200">Login</button>
                </div>
                <p class="mt-4 text-sm text-center text-gray-500">Demo: admin@test.com / 123456</p>
            </div>
        </div>
    `;
    
    document.getElementById('loginBtn').addEventListener('click', handleLogin);
}

async function handleLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }

    try {
        // Requirement: Validate credentials against JSON Server
        const response = await fetch(`http://localhost:3000/users?email=${email}&password=${password}`);
        const users = await response.json();

        if (users.length > 0) {
            const user = users[0];
            // Set user in state and localStorage
            setUser(user); 
            renderDashboard();
        } else {
            alert('Invalid email or password');
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('Error connecting to the server');
    }
}

async function renderDashboard() {
    const app = document.getElementById('app');
    if (!app) return;

    const isAdmin = state.user.role === 'admin';

    app.innerHTML = `
        <nav class="bg-slate-800 text-white p-4 flex justify-between items-center shadow-md">
            <div class="flex items-center space-x-4">
                <span class="font-bold text-lg text-blue-400">CRUDTASK</span>
                <span class="text-sm bg-slate-700 px-2 py-1 rounded capitalize">${state.user.role}</span>
            </div>
            <div class="flex items-center space-x-4">
                <span>Welcome, <strong>${state.user.name}</strong></span>
                <button id="logoutBtn" class="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm transition">Logout</button>
            </div>
        </nav>
        
        <div class="p-8 max-w-6xl mx-auto">
            <header class="flex justify-between items-center mb-8">
                <h2 class="text-2xl font-bold text-slate-800">
                    ${isAdmin ? 'System Administration' : 'My Academic Tasks'}
                </h2>
                ${!isAdmin ? '<button class="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700">+ New Task</button>' : ''}
            </header>

            <div id="task-list" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Tasks will be injected here -->
            </div>
        </div>
    `;

    document.getElementById('logoutBtn').addEventListener('click', () => {
        setUser(null);
        renderLogin();
    });

    loadTasks();
}

async function loadTasks() {
    const container = document.getElementById('task-list');
    if (!container) return;

    container.innerHTML = '<div class="col-span-full text-center py-10 text-gray-500">Loading tasks...</div>';

    try {
        // Requirement: Admin sees all, User only sees their own
        const endpoint = state.user.role === 'admin' 
            ? 'http://localhost:3000/tasks' 
            : `http://localhost:3000/tasks?userId=${state.user.id}`;

        const response = await fetch(endpoint);
        const tasks = await response.json();

        container.innerHTML = '';

        if (tasks.length === 0) {
            container.innerHTML = '<p class="col-span-full text-center text-gray-400 italic">No tasks found.</p>';
            return;
        }

        tasks.forEach(task => {
            const statusColor = task.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
            
            const card = document.createElement('div');
            card.className = 'bg-white p-5 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition';
            card.innerHTML = `
                <div class="flex justify-between items-start mb-3">
                    <h3 class="font-bold text-slate-800">${task.title || task.name}</h3>
                    <span class="text-[10px] uppercase font-bold px-2 py-1 rounded ${statusColor}">
                        ${task.status}
                    </span>
                </div>
                <p class="text-sm text-slate-600 mb-4">${task.description || 'No description provided.'}</p>
                <div class="flex justify-between items-center text-xs text-slate-400 border-t pt-3">
                    <span>Priority: <strong class="text-slate-600">${task.priority}</strong></span>
                    ${state.user.role === 'admin' ? `<span>User ID: ${task.userId}</span>` : ''}
                </div>
            `;
            container.appendChild(card);
        });
    } catch (e) {
        container.innerHTML = '<div class="col-span-full text-red-500 text-center">Failed to load tasks. Please check JSON Server.</div>';
    }
}
