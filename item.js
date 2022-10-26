let date = new Date;
let currentDay = date.getDate() 
let currentMonth = date.getMonth() + 1 
const alertBox= document.querySelector(".alert")
const items = document.querySelectorAll(".item");
const activationMonth = 10;

console.log(currentDay);
console.log(currentMonth);

let openOrClosed = [];
if(localStorage.days){
    openOrClosed = JSON.parse(localStorage.getItem("days"))
}


items.forEach(function(element, index){
    element.addEventListener("click", clickHandler);
    if(openOrClosed[index] == true){
        element.classList.add("open")
    }
})

function clickHandler(event){
    if (currentDay >= this.dataset.date && currentMonth == activationMonth){
        if(this.classList.contains("open")){
            this.classList.remove("open")
            openOrClosed[this.dataset.date-1] = false
        }else{
            this.classList.add("open")
            openOrClosed[this.dataset.date-1] = true
        }
        localStorage.setItem("days", JSON.stringify(openOrClosed))
    }
    else {
        alertBox.style.display = "block"
        setTimeout(() => {alertBox.style.display = "none";}, 8000)
    }
}



