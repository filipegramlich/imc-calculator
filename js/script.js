import {alertError} from "./alert-error.js";
import { calculateIMC, notNumber, showResultMessage} from "./utils.js";

const form =  document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.onsubmit = (event) => {
    event.preventDefault();

    const weight = inputWeight.value;
    const height = inputHeight.value;

    const weightOrHeightItsNotANumber = notNumber(weight) || notNumber(height);

    if(weightOrHeightItsNotANumber){
        alertError.open()
        return;
    }

    alertError.close();

    const result = calculateIMC(weight, height);
    showResultMessage(result);
}

inputWeight.oninput = () =>  alertError.close();
inputHeight.oninput = () =>  alertError.close();
