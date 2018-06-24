const userInput = document.querySelectorAll('.user-input');
const inputs = [];
const inputValues = [];

const getInputs = () => {
    userInput.forEach(element => {
        let input = element.querySelector('input');
        inputs.push(input);
    })
};

const getInputValues = () => {
    inputs.forEach(element => {
        let inputValue = element.value;
        inputValues.push(inputValue);
    })
}

getInputs();
getInputValues();