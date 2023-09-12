
// localStorage.setItem(key,value);
// localStorage.getItem(key);

// let b = localStorage.getItem(key);
// console.log(b)

const inputBox = document.getElementById("inputbox")
const makelist = document.getElementById("list")
function addTask()
{
    if(inputBox.value === '')
    {
        alert("please write your task")
    }
    else{
       let li = document.createElement("li")
       li.innerHTML = inputBox.value
       makelist.appendChild(li)

       let span = document.createElement("span");
       span.innerHTML = "\u00d7";
       li.appendChild(span)
    }
    saveData();
    inputBox.value = "";
}

makelist.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    saveData();
  }
  else if(ev.target.tagName === 'SPAN') {
    ev.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData(){
    localStorage.setItem("data",makelist.innerHTML);
}

// refresh krne pe bhi rhega
function showData(){
    makelist.innerHTML = localStorage.getItem("data")
}
showData()












