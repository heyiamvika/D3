const form = document.querySelector('.values');

const values = [
    { "name": 'airDensity', "defaultValue": 1.0, "minValue": 0.0, "maxValue": 2.0 },
    { "name": 'frictionFactor', "defaultValue": 1.0, "minValue": 0.0, "maxValue": 2.0 },
    { "name": 'dragCoefficient', "defaultValue": 1.0, "minValue": 0.0, "maxValue": 2.0 },
    { "name": 'gravityFactor', "defaultValue": 1.0, "minValue": 0.0, "maxValue": 2.0 },
    { "name": 'windDirection', "defaultValue": 1.0, "minValue": 0.0, "maxValue": 2.0 },
    { "name": 'windVelocity', "defaultValue": 1.0, "minValue": 0.0, "maxValue": 2.0 },
    { "name": 'rollingResistanceCoefficient', "defaultValue": 1.0, "minValue": 0.0, "maxValue": 2.0 },
    { "name": 'bikeMass', "defaultValue": 1.0, "minValue": 0.0, "maxValue": 2.0 },
    { "name": 'riderMass', "defaultValue": 1.0, "minValue": 0.0, "maxValue": 2.0 },
    { "name": 'wheelAerodynamicFactor', "defaultValue": 1.0, "minValue": 0.0, "maxValue": 2.0 },
    { "name": 'distanceCovered', "defaultValue": 1.0, "minValue": 0.0, "maxValue": 2.0 },
    { "name": 'initialVelocity', "defaultValue": 1.0, "minValue": 0.0, "maxValue": 2.0 },
    { "name": 'finalVelocity', "defaultValue": 1.0, "minValue": 0.0, "maxValue": 2.0 },
    { "name": 'rideDirection', "defaultValue": 1.0, "minValue": 0.0, "maxValue": 2.0 },
    { "name": 'grade', "defaultValue": 1.0, "minValue": 0.0, "maxValue": 2.0 },
    { "name": 'timeToCoverDistance', "defaultValue": 1.0, "minValue": 0.0, "maxValue": 2.0 },
    { "name": 'momentOfInertiaOfWheels', "defaultValue": 1.0, "minValue": 0.0, "maxValue": 2.0 },
    { "name": 'outerTireRadius', "defaultValue": 1.0, "minValue": 0.0, "maxValue": 2.0 },
    { "name": 'chainEfficiencyFactor', "defaultValue": 1.0, "minValue": 0.0, "maxValue": 2.0 },
    { "name": 'dragValues', "defaultValue": 1.0, "minValue": 0.0, "maxValue": 2.0 }
];

const getLayout = (data) => {
    data.forEach(element => {
        console.log(element);
        let input = document.createElement('label');
        let inputData = `
        <span>${element.name}</span>
        <span>${element.minValue}</span>
        <input type="range" min=${element.minValue} max=${element.maxValue} value=${element.defaultValue}/>
        <span>${element.maxValue}</span>
        `;
        input.innerHTML = inputData;
        input.className = 'user-input';
        form.appendChild(input);
    });
};

getLayout(values);