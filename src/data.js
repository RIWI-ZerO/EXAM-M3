const API_URL = "http://localhost:3000/tasks";

async function getAllTasks() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch tasks");
        return await response.json();
    } catch (error) {
        console.error("Error fetching tasks:", error);
        return [];
    }
}

async function getTasksByUserId(userId) {
    try {
        const response = await fetch(`${API_URL}?userId=${userId}`);
        if (!response.ok) throw new Error("Failed to fetch user tasks");
        return await response.json();
    } catch (error) {
        console.error("Error fetching user tasks:", error);
        return [];
    }
}

async function createTask(taskData) {
    try {
        // Fix: Added missing fetch call and proper object structure
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskData)
        });
        
        if (!response.ok) throw new Error("Failed to create task");
        return await response.json();
    } catch (error) {
        console.error("Error creating task:", error);
        return null;
    }
}

async function updateTask(taskId, updateData) {
    try {
        // Fix: Changed endpoint from /orders to /tasks to match requirements
        const response = await fetch(`${API_URL}/${taskId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateData)
        });

        if (!response.ok) throw new Error("Failed to update task");
        return await response.json();
    } catch (error) {
        console.error("Error updating task:", error);
        return null;
    }
}

async function deleteTask(taskId) {
    try {
        const response = await fetch(`${API_URL}/${taskId}`, {
            method: "DELETE"
        });
        
        if (!response.ok) throw new Error("Failed to delete task");
        return true;
    } catch (error) {
        console.error("Error deleting task:", error);
        return false;
    }
}
