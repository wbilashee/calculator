const body = document.body;
const slider = document.querySelector("#slider");
const screenInput = document.querySelector("#screen-input");

slider.onchange = () => {
    if (slider.value === "100") {
        body.classList.add("dark");
        body.classList.remove("light");
    } else if (slider.value === "50") {
        body.classList.add("light");
        body.classList.remove("dark");
    } else {
        body.classList.remove("dark");
        body.classList.remove("light");
    }
}

const insert = (value) => {
    screenInput.value += value;
}

const del = () => {
    screenInput.value = screenInput.value.substring(0, screenInput.value.length - 1);
}

const reset = () => {
    screenInput.value = "";
}

const equal = () => {
    if (screenInput.value) {
        try {
            const result = eval(screenInput.value);
            screenInput.value = result;
        } catch (error) {
            screenInput.value = "Error!";
        }
    }
}