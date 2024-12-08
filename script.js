const userInputElement = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const resultValueElement = document.getElementById("result");

button.addEventListener("click", () => {
    const userInput = userInputElement.value;
    palindromeChecker(userInput); 
});

const palindromeChecker = (userInput) => {
    if (userInput === '') {
        alert("Please input a value");
        return;
    }
    else {
        if (userInput.length === 1){ 
            resultValueElement.innerText = `${userInput} is a palindrome`;
            return;
        }
        const cleanUserInput = userInput.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
        const reverseUserInput = cleanUserInput.split('').reverse().join('');
        
        if(cleanUserInput === reverseUserInput){ 
            resultValueElement.innerText = `${userInput} is a palindrome`;
            return;
        }
        else {
            resultValueElement.innerText = `${userInput} is not a palindrome`;
        }
    }
}