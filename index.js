// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    const target = document.getElementById("text")
    target.innerHTML ="This is really cool!"
  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );