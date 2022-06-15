let randomNum = Math.floor(Math.random()*101)

const handleFormSubmit = (evt) => {
    evt.preventDefault() 
    const formData = new FormData(evt.target);
    const formProps = Object.fromEntries(formData);
    showGuess(formData.get("numberGuess"))
}

const showGuess = (number) => { 
    console.log(randomNum)
    let greetingOutput = document.getElementById("output")
    let newOutput = document.createElement("div")
    newOutput.innerHTML= number
    let parentDiv = document.getElementById("parent-div")
    if(number==randomNum){
        if (greetingOutput) {
        greetingOutput.innerHTML = "CORRECT!"
        }
    }    
    else if(number<randomNum){
        if (greetingOutput) {
            greetingOutput.innerHTML = "TOO LOW, try again"
            }
    }
    else if(number>randomNum){
        if (greetingOutput) {
            greetingOutput.innerHTML = "TOO HIGH, try again"
            }
    }
    if (parentDiv){
        parentDiv.appendChild(newOutput)
    }
  }
  
