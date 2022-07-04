
function addItem (text = null) {
    // Check if the input box contain value or null
    if(!text)
    text = document.getElementById("inputText").value;
    if(!text)
    return ;
    // create elements
    let container = document.getElementById("tasks");
    let item = document.createElement("div");
    let lbl = document.createElement("label");
    let btn = document.createElement("button");
    item.className = "item";
    lbl.textContent = text;
    btn.textContent = "Remove Ttem";
    btn.setAttribute("onclick", `removeItem("${text}")`);
    item.appendChild(lbl);
    item.appendChild(btn);
    container.appendChild(item);
    localStorage.setItem(text, text);
    document.getElementById("inputText").value = "";
}// End of AddItem Function
function removeItem (text) {
    let container = document.getElementById("tasks");
    let tasks = document.getElementsByClassName("item");
    let task;// task you need to delete it
    for(let i of tasks)
    if(i.lastChild.getAttribute("onclick") == `removeItem("${text}")`) {
    task = i;
    break;
    }
    container.removeChild(task);
    localStorage.removeItem(text);
}// End of RemoveItem Function
function addFromLocalStorage() {
    for(let i = 0; i < localStorage.length; i++)
    addItem(localStorage.key(i));
}