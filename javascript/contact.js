//Get data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success= document.querySelector("#success");
const errorNodes= document.querySelectorAll(".error");
//Validate data
function validateform(){

}

function validateform(){
    clearMessages();

if(nameInput.value.length < 1){
    errorNodes[0].innerText = "Name cannot be blank";
    nameInput.classList.add("error-border");
    errorFlag = true;
}
if(!emailIsValid(email.value)){
    errorNodes[1].innerText = "Invalid email address";
    email.classList.add("error-border");
    errorFlag = true;

}
if(message.value.lengt < 1){
    errorNodes[2].innerText = "please enter message";
    message.classList.add("error-border");
    errorFlag = true;
}
if(!errorFlag){
    success.innerText ="success!";
}
// to show success message
function clearMessages(){
for(let i = 0; i <errorNodes.length; i++){
    errorNodes [i].innerText = "";
}
nameInput.classList.remove("error-borer");
}
function emailIsValid(email){
  let pattern= /\s+@\s+\.\s+/;
  return pattern.test(email);
}}