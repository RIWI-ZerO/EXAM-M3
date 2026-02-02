async function getTasks(){
    try{
        const response=await fetch("http://localhost:3000/tasks");
        const tasks=await response.json();
        return tasks;
    }catch (error){
        console.error("Error:, error");
        return[];
    }

}


async function createTask(taskData) {
    try{
        method: "POST",
        headers; {
            "Content-Type": "application/json"
            };
        body: JSON.stringify(taskData)
        })
        const newTask = await response.json();
        return newTask;
    } catch (error) {
        console.error("Error:", error);
        return null;
}

async function updateTaskStatus(TaskId, NewStatus) {
    try {
        const response = await fetch(`http://localhost:3000/orders/${TaskId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ status: newStatus })
        });
        const updatedTask= await response.json();
        return updatedTask;
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}