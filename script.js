const weightInput = document.querySelector("#weight-input")
const heightInput = document.querySelector("#height-input")
const heightNumber = heightInput.value / 100
const submitButton = document.querySelector("#submit-button")
const showResult = document.querySelector("#show-result")
const resetButton = document.querySelector("#reset-button")
submitButton.addEventListener("click", BMICalculator)
function BMICalculator(event){
    let heightNumber = Number(heightInput.value) / 100
    let weightNumber = Number(weightInput.value)
    let mount = Math.round(weightNumber / (heightNumber*heightNumber))
   
    if(heightInput.value == "" || weightInput.value == ""){
        event.preventDefault()
        showResult.innerHTML = "Please fill both fields!"
        showResult.style.display = "block"
    }
    else{
        if(mount < 16) {
        showResult.innerHTML =  "Your BMI is: " + mount + "<br>" + "Severe Thinness"
        localStorage.setItem("result", showResult.innerHTML)
        showResult.style.display = "block"
        console.log(mount)
        }
        if(mount >= 16 && mount < 17) {
        showResult.innerHTML = "Your BMI is: " + mount + "<br>" + "Moderate Thinness"
        showResult.style.display = "block"
        localStorage.setItem("result", showResult.innerHTML)
        console.log(mount)
        }
        if(mount >= 17 && mount < 18.5 ){
        showResult.innerHTML = "Your BMI is: " + mount  + "<br>" + "Mild Thinness"
        showResult.style.display = "block"
        localStorage.setItem("result", showResult.innerHTML)
        console.log(mount)
         }
    
        if(mount >= 18.5 && mount < 25) {
        showResult.innerHTML =  "Your BMI is: " + mount + "<br>" + "Normal"
        showResult.style.display = "block"
        localStorage.setItem("result", showResult.innerHTML)
        console.log(mount)
        }
    
        if(mount >= 25 && mount < 30){
        showResult.innerHTML = "Your BMI is: " + mount + "<br>" + "Overweight"
        showResult.style.display = "block"
        localStorage.setItem("result", showResult.innerHTML)
        console.log(mount)
        }
        if( mount >= 30 && mount < 35){
        showResult.innerHTML = "Your BMI is: " + mount + "<br>" + "Obese Class I"
        showResult.style.display = "block"
        localStorage.setItem("result", showResult.innerHTML)
        console.log(mount)
        }

        if(mount >= 35 && mount < 40){
        showResult.innerHTML =  "Your BMI is: " + mount + "<br>" + "Obese Class II"
        showResult.style.display = "block"
        localStorage.setItem("result", showResult.innerHTML)
        console.log(mount)
        }
    
        if (mount >= 40) {
        showResult.innerHTML = "Your BMI is:" + mount + "<br>" + "Obese Class III"
        showResult.style.display = "block"
        localStorage.setItem("result", showResult.innerHTML)
        // setTimeout(() => {showResult.style.display = "none";}, )
        console.log(mount)
        }
    }
}

window.addEventListener("load", loadStorage)
function loadStorage(){
    if(localStorage.getItem("result")){
        let savedHTML = localStorage.getItem("result")
        showResult.innerHTML = savedHTML
        if(showResult.innerHTML!= ""){
            showResult.style.display = "block"
        }else{
        showResult.style.display = "none"
    } 
}
}
resetButton.addEventListener("click", reset)
function reset(){
    showResult.style.display = "none"
    localStorage.setItem("result", "")
    localStorage.getItem("result")
    heightInput.value = ""
    weightInput.value = ""
}
weightInput.addEventListener("click", reset1)
function reset1(){
    showResult.style.display = "none"
    localStorage.setItem("result", "")
    localStorage.getItem("result")   
}
heightInput.addEventListener("click", reset2)
function reset2(){
    showResult.style.display = "none"
    localStorage.setItem("result", "")
    localStorage.getItem("result")   
}