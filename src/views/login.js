// Add this function to connect with your JSON Server
async function login(username, password) {
    try {
        // 1. Fetch users from your local server
        const response = await fetch('http://localhost:3000/users');
        
        if (!response.ok) {
            throw new Error("Could not connect to the database");
        }

        const users = await response.json();

        // 2. Find a user that matches both username and password
        // Note: In a real app, passwords should be encrypted
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            // Save session (using your state.js logic)
            // setUser(user); 
            
            return { success: true, user: user };
        } else {
            return { success: false, message: "Invalid username or password" };
        }
    } catch (error) {
        console.error("Fetch error:", error);
        return { success: false, message: "Server is not running" };
    }
}
