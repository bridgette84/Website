/*
Author: Angel Edmonds, Bridgette Burton
File Name: script.js
Date: 11/22/2023
*/


// Get the submit button element
const submitButton = document.getElementById('submit');

// Add event listeners for hover
submitButton.addEventListener('mouseover', handleHover);
submitButton.addEventListener('mouseout', handleMouseOut);

// Event handler for hover
function handleHover() {
    submitButton.style.backgroundColor = '#005682'; // Change to your desired hover color
    submitButton.style.color = '#f6eee4'; // Change to your desired text color
}

// Event handler for mouseout
function handleMouseOut() {
    submitButton.style.backgroundColor = ''; // Reset the background color
    submitButton.style.color = ''; // Reset the text color
}

// Add your existing handleSubmit function
function handleSubmit() {
    alert('Form submitted!'); 
}

document.getElementById('play-pause').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    if (audio.paused) {
      audio.play();
      this.textContent = 'Pause';
    } else {
      audio.pause();
      this.textContent = 'Play';
    }
  });