document.querySelector("#btn").addEventListener("click", writeOnBrowser);
btn.addEventListener("click", writeOnBrowser);
var toDo = document.querySelector("#event");

function writeOnBrowser(event) {
    event.preventDefault();
    document.querySelector("#list").innerHTML=(`<li>${toDo.value}</li>`);
    toDo.value='';
}