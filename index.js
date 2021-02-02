// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The dom has loaded")
    const pText = document.getElementById("text");
    pText.innerHTML = "This is really cool!"
});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );