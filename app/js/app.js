const screenInput = document.querySelector("#screen-input");

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