
var recieveMessageButton = document.querySelector(".message-button")
var imageMessage = document.querySelector(".message-image")
var affirmationMessage = document.querySelector(".affirmation-message")
var mantroMessage = document.querySelector(".mantro-message")
var inputAffirmation = document.querySelector(".affirmation-message")
var inputMantro = document.querySelector(".mantro-message")
var formMessageButton = document.querySelector(".add-message-button")
var fullFormView = document.querySelector(".message-box")
var theSubmitButton = document.querySelector(".submit-button")
var typeOfMessage = document.getElementById("type-message")
var originalMessage = document.getElementById("original-message")
var originalAffMessage = document.querySelector(".original-aff-message")
var originalManMessage = document.querySelector(".original-mantro-message")


recieveMessageButton.addEventListener("click", recieveMessage)

formMessageButton.addEventListener("click", opensFormBox)

theSubmitButton.addEventListener("click", saveNewMessage)






  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

function recieveMessage(){
  if (document.getElementById('affirmation-button').checked){
    imageMessage.classList.add("hidden")
    mantroMessage.classList.add("hidden")
    originalManMessage.classList.add("hidden")
    originalAffMessage.classList.add("hidden")
    affirmationMessage.classList.remove("hidden")
    affirmationMessage.innerText = data.affirmation[getRandomIndex(data.affirmation)]
}else if(document.getElementById('mantro-button').checked){
  imageMessage.classList.add("hidden")
  affirmationMessage.classList.add("hidden")
  originalManMessage.classList.add("hidden")
  originalAffMessage.classList.add("hidden")
  mantroMessage.classList.remove("hidden")
  mantroMessage.innerText = data.mantro[getRandomIndex(data.mantro)]

}
}


function opensFormBox(){
fullFormView.classList.remove("hidden")
}

function saveNewMessage(){
  if (typeOfMessage.value === "Affirmation"){
  data.affirmation.push(originalMessage.value)
  imageMessage.classList.add("hidden")
  mantroMessage.classList.add("hidden")
  affirmationMessage.classList.add("hidden")
  originalManMessage.classList.add("hidden")
  originalAffMessage.classList.remove("hidden")
  originalAffMessage.innerText = originalMessage.value
} else if(typeOfMessage.value === "Mantro"){
  data.mantro.push(originalMessage.value)
  imageMessage.classList.add("hidden")
  mantroMessage.classList.add("hidden")
  affirmationMessage.classList.add("hidden")
  originalAffMessage.classList.add("hidden")
  originalManMessage.classList.remove("hidden")
  originalManMessage.innerText = originalMessage.value
}else{
  alert("Pick a type of message!")
}
}
