//Register 


class RegisterComponent {
    constructor(containerId) {
        this.container = document.getElementById(containerId) || document.body;
        this.render();
        this.initEventListeners();
    }

    render() {
        this.container.innerHTML = `
        <div class="bg-[#f5f7fb] min-h-screen flex items-center justify-center p-4 font-sans text-gray-900">
            <div class="bg-white shadow-xl border border-gray-100 w-full max-w-[480px] rounded-2xl p-8 md:p-12 transition-all">
                
                <!-- Logo Section -->
                <div class="flex flex-col items-center mb-8">
                    <div class="w-16 h-16 bg-[#3b4351] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                        <svg xmlns="http://www.w3.org" class="text-white w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
                    </div>
                    <h1 class="font-extrabold text-3xl tracking-tight text-slate-800">CRUDZASO</h1>
                </div>

                <!-- Welcome Text -->
                <div class="text-center mb-8">
                    <h2 class="text-xl font-bold text-gray-800 mb-1">Create account</h2>
                    <p class="text-gray-500 text-sm">Join the academic performance platform today</p>
                </div>

                <!-- Register Form -->
                <form id="register-form" class="space-y-5">
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                        <input type="text" id="fullName" placeholder="John Doe" required
                            class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all placeholder:text-gray-400">
                    </div>

                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-1">Email address</label>
                        <input type="email" id="email" placeholder="student@university.edu" required
                            class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all placeholder:text-gray-400">
                    </div>

                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-1">Password</label>
                        <input type="password" id="password" placeholder="Create a password" required
                            class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all placeholder:text-gray-400">
                    </div>

                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-1">Confirm Password</label>
                        <input type="password" id="confirmPassword" placeholder="Confirm password" required
                            class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all placeholder:text-gray-400">
                    </div>

                    <button type="submit" 
                        class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-xl shadow-lg shadow-blue-500/30 transition-all transform active:scale-[0.98] mt-2">
                        Register
                    </button>

                    <div class="text-center pt-2">
                        <span class="text-gray-500 text-sm">Already have an account?</span>
                        <a href="../index.html" class="text-blue-600 hover:underline font-semibold text-sm ml-1">Sign in</a>
                    </div>
                </form>
            </div>
        </div>
        `;
    }

    initEventListeners() {
        const form = document.getElementById('register-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleRegister();
        });
    }

    handleRegister() {
        const fullName = document.getElementById('fullName').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            // Using SweetAlert2 as per your original requirement
            Swal.fire({
                title: 'Error!',
                text: 'Passwords do not match',
                icon: 'error',
                confirmButtonColor: '#2563eb'
            });
            return;
        }

        console.log("Registering user:", fullName);
        // Add your fetch logic here to send data to the API
    }
}

// Initialize the component
new RegisterComponent('app');
