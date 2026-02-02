// Global variable to know which page we're on
let currentRoute = "login";

function navigateTo(route) {
    // Check if user can access this route
    if (!canAccessRoute(route)) {
        // If not, redirect based on case
        if (!isLoggedIn()) {
            route = "login";
        } else if (isAdmin()) {
            route = "admin";
        } else {
            route = "dashboard";
        }
    }
    
    // Save the current route
    currentRoute = route;
    
    // Get the main container
    const app = document.getElementById("app");
    
    // Clear current content
    app.innerHTML = "";
    
    // Render the new view based on route
    switch (route) {
        case "login":
            renderLoginPage();
            break;
        case "dashboard":
            renderDashboardpage();
            break;
        case "mytask":
            renderOrdersPage();
            break;
        case "newtask":
            renderProfilePage();
            break;
        case "admin":
            renderAdminPage();
            break;
        default:
            renderLoginPage();
    }
}

function initApp() {
    // Check if there is a saved session
    const user = getCurrentUser();
    
    if (user) {
        // If there is a user, go to their main page
        if (user.role === "admin") {
            navigateTo("admin");
        } else {
            navigateTo("dashboard");
        }
    } else {
        // If no user, go to login
        navigateTo("login");
    }
}