/* សរសេរកូដថែមទាំងអស់លើកលែងសេចក្តីអធិប្បាយ។ */

const generateBtn = document.getElementById("generate-btn");
const numbersContainer = document.getElementById("numbers-container");
const minRangeInput = document.getElementById("min-range");
const maxRangeInput = document.getElementById("max-range");
const minValueDisplay = document.getElementById("min-value");
const maxValueDisplay = document.getElementById("max-value");

function generateRandomNumbers(){

    const min = parseInt(minRangeInput.value) || 0;
    const max = parseInt(maxRangeInput.value) || 100;

    if (min >= max){
        alert("Minimum range must be less than maximum range.");
        return;
    }

    const numberBoxes = document.querySelectorAll(".number-box");

    const numbers = [];

    for (let i=0;i<10;i++){
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.push(randomNum);

        numberBoxes[i].textContent = randomNum;
    }
}

generateBtn.addEventListener("click", generateRandomNumbers);