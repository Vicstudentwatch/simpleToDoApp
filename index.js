// Guess either 0 or 1
// console.log(Math.round(Math.random()));

const inputBox = document.querySelector(".input-box");
const listContainer = document.querySelector(".list-container");
const addText = document.querySelector(".addText")

addText.addEventListener("click",()=>{
    if (inputBox.value === "") {
        alert("Please input Something");
    } else {
        let input = document.createElement('li');
        input.innerHTML = inputBox.value;
        listContainer.appendChild(input);
        
        //create span X to delete
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        input.appendChild(span);
        inputBox.value = "";
        saveData();
    }
})
listContainer.addEventListener('click',e=>{
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked")
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)


const saveData = () =>  localStorage.setItem('data', listContainer.innerHTML);
const showData = () => listContainer.innerHTML = localStorage.getItem(('data'));

showData();




