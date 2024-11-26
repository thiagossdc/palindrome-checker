// Palindrome function
function palindrome(str) {
    let strLowerCase = str.toLowerCase();
    let editedStr = strLowerCase.replace(/[^0-9a-z]/gi, ''); 
    let characters = editedStr.split("");
    let charactersReversed = characters.slice(0).reverse();
    let result = true;
  
    for (let i = 0; i < characters.length; i++) {
      if (characters[i] !== charactersReversed[i]) {
        result = false;
      }
    }
  
    return result;
  }
  
  // Handling the button click
  document.getElementById('check-btn').addEventListener('click', function() {
    const input = document.getElementById('text-input').value;
    const resultDiv = document.getElementById('result');
  
    if (!input) {
      alert("Please input a value");
      return;
    }
  
    const isPalindrome = palindrome(input);
    if (isPalindrome) {
      resultDiv.textContent = `${input} is a palindrome`;
      resultDiv.style.color = '#4CAF50';
    } else {
      resultDiv.textContent = `${input} is not a palindrome`;
      resultDiv.style.color = '#f44336';
    }
  });
  