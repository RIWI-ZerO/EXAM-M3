document.addEventListener("DOMContentLoaded", async function() {
    console.log("Loading...");
    
    try {
        const response = await fetch('db.json'); 
        const data = await response.json();
        
        console.log(data.current.tasks);
        initApp(); 
    } catch (error) {
        console.error("Error loading data:", error);
    }
});
