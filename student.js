const nameInput = document.getElementById("studentName");
const message = document.getElementById("message");
const greetButton = document.getElementById("greetButton");
const colorButton = document.getElementById("colorButton");
const resetButton = document.getElementById("resetButton");


greetButton.addEventListener("click", function(){
    const name = nameInput.value;
    if (name ==="") {
        message.textContent = "Please enter your name!";
    } else{
        message.textContent = "Hello, " + name + "Welcome";
    }

});

// Changing the background colour when clicked

colorButton.addEventListener("click", function(){
    document.body.style.backgroundColor="lightblue";

})

// Reset the page
resetButton.addEventListener("click", function(){
    nameInput.value = "";
    message.textContent = "Welcome! Enter your name below";
    document.body.style.backgroundColor = "#f0f0f0";
})