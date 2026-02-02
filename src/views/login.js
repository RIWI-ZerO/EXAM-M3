function renderLoginPage(){
    const app=document.getElementById("app");

    app.innerHTML=`
        <div class =login-container">
        <h2>Welcome back<h2>
        ...login form...
        ...register form... 
        <div/>{
               
`;
    }

async function handleLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (!username || !password) {
        showError("error-message", "Fill in the fields");
        return;
    }
    
    const result = await login(username, password);
    
    if (result.success) {
        if (result.user.role === "admin") {
            navigateTo("admin");
        } else {
            navigateTo("dashboard");
        }
    } else {
        showError("error-message", result.message);
    }
}