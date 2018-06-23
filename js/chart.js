const input = document.querySelectorAll('.user-input');
const inputValues = [];

const getUserInputs = () => {
    input.forEach(element => {
        let inputValue = element.querySelector('input').value;
        inputValues.push(inputValue);
    });
};

getUserInputs();