
var recieveMessageButton = document.querySelector(".message-button")
var imageMessage = document.querySelector(".message-image")
var affirmationMessage = document.querySelector(".affirmation-message")
var mantroMessage = document.querySelector(".mantro-message")
var inputAffirmation = document.querySelector(".affirmation-message")
var inputMantro = document.querySelector(".mantro-message")
var formMessageButton = document.querySelector(".add-message-button")
var fullFormView = document.querySelector(".message-box")
var theSubmitButton = document.querySelector(".submit-button")
var typeOfMessage = document.getElementById("#type-message")
var originalMessage = document.getElementById("#original-message")
// var recieveAffirmationButton = document.getElementById("affirmation-button")

recieveMessageButton.addEventListener("click", recieveMessage)

formMessageButton.addEventListener("click", opensFormBox)

theSubmitButton.addEventListener("click", saveNewMessage)

// recieveAffirmationButton.addEventListener("click", receiveAffirmation)




  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

function recieveMessage(){
  if (document.getElementById('affirmation-button').checked){
    imageMessage.classList.add("hidden")
    mantroMessage.classList.add("hidden")
    affirmationMessage.classList.remove("hidden")
    affirmationMessage.innerText = data.affirmation[getRandomIndex(data.affirmation)]
}else if(document.getElementById('mantro-button').checked){
  imageMessage.classList.add("hidden")
  affirmationMessage.classList.add("hidden")
  mantroMessage.classList.remove("hidden")
  mantroMessage.innerText = data.mantro[getRandomIndex(data.mantro)]

}
}


function opensFormBox(){
fullFormView.classList.remove("hidden")
}

function saveNewMessage(){
  if (typeOfMessage === "Affirmation"){
  data.affirmation[i].push(originalMessage.value)
} else if(typeOfMessage === "Mantro"){
  data.mantro.push(originalMessage.value)
}
}
  // function getsRandomMessage(){
  //   imageMessage.classList.add("hidden")



  //more eventlisteners
  /*
more eventlisteners
how to access value of checks and unchecked radio
use those keys to access value of the arrays
use alength of the array to use as high end for random number
after user inner html



add text area to add message
add more radio buttons to access the arnew arrays


  */
