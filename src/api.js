document.activeElement("DOMcontentLoaded", function()
{
    console.log("Loading...");
    initApp();
});


const response=await fetch ('db.jason');
const data=await response.json();
console.log(data.current.tasks);

