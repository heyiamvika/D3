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

const chart = d3.select('.chart')
    .append('svg')
    .attr('width', 300)
    .attr('height', 300);

chart.append('circle')