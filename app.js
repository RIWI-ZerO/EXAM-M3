// app.js -Logic about login
document.addEventListener('DOMContentLoaded', () => {
    if (!state.user) {
        renderLogin();
    } else {
        renderDashboard();
    }
});

function renderLogin() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="flex items-center justify-center min-h-screen bg-red-500">
            <div class="bg-white p-8 rounded shadow-lg w-96">
                <h1 class="text-2xl font-bold mb-4 text-center">CRUDZASO Login</h1>
                <input type="text" id="username" placeholder="User" class="w-full p-2 border mb-2">
                <input type="password" id="password" placeholder="Contraseña" class="w-full p-2 border mb-4">
                <button onclick="handleLogin()" class="w-full bg-blue-500 text-white p-2 rounded">Login</button>
            </div>
        </div>
    `;
}

async function renderDashboard() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <nav class="bg-red-600 text-white p-4 flex justify-between">
            <span class="font-bold">Hello ${state.user.name}</span>
            <button onclick="logout()">Logout</button>
        </nav>
        <div class="p-8">
            <h2 class="text-xl mb-4">Catálogo Pokémon</h2>
            <div id="pokemon-list" class="grid grid-cols-4 gap-4">
                <!-- Pokémon se cargan aquí -->
            </div>
        </div>
    `;
    loadCatalog();
}

async function loadCatalog() {
    const container = document.getElementById('pokemon-list');
    container.innerHTML = '<div class="loading-spinner"></div>';
    try {
        const list = await getPokemonList();
        container.innerHTML = '';
        list.map(async (p) => {
            const detail = await getPokemonDetail(p.name);
            const card = document.createElement('div');
            card.className = 'bg-white p-4 rounded shadow pokemon-card';
            card.innerHTML = `
                <img src="${detail.sprites.front_default}" alt="${p.name}" class="mx-auto">
                <p class="text-center font-bold capitalize">${p.name}</p>
                <button onclick="catchPokemon('${p.name}')" class="mt-2 w-full bg-red-400 text-white rounded p-1 text-sm">Capturar</button>
            `;
            container.appendChild(card);
        });
    } catch (e) {
        container.innerHTML = 'Error al cargar datos.';
    }
}