let form = document.querySelector('.values');

let values = ['airDensity', 'bla-bla'];

const getLayout = (data) => {
    data.forEach(element => {
        let input = document.createElement('label');
        let inputData = `
        <span>${element}</span>
        <span>0</span>
        <input type="range" min="0" max="100" />
        <span>100%</span>
        `;
        input.innerHTML = inputData;
        form.appendChild(input);
    });
};

getLayout(values);