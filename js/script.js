// Copyright (c) 2025 Catherine Vu All rights reserved
//
// Created by: Catherine
// Created on: April 17 2025
// This file contains the JS functions for index.html

const randomNumber = Math.floor(Math.random() * 6) + 1;

/**
 * This function checks if the user has selected the random number from above
 */
function checkNumber () {
  const userNumber = parseInt(document.getElementById('user-number').value);

  if (userNumber === randomNumber) {
    document.getElementById('result').innerHTML =
      '<p>You have guessed the correct number!</p>';
  } else {
    document.getElementById('result').innerHTML =
      '<p>You have guessed the wrong number!' +
      '<br/>The correct number was: ' + randomNumber + '</p>';
  }
}
