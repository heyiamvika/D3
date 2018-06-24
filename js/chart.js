const userInput = document.querySelectorAll('.user-input');
const inputs = [];

const getInputs = () => {
    userInput.forEach(element => {
        let input = element.querySelector('input');
        inputs.push(input);
    })
};

getInputs();
console.log(inputs);