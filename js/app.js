const taskInput = document.querySelector("#task");
const list = document.querySelector("#list");

function newElement(){
    list.innerHTML += `<li>${taskInput.value}</li>` ;
    
}