import { Modal } from "./modal.js";

export function notNumber(value){
    return isNaN(value) || value == "";
}

export function calculateIMC(weight,height){
    return (weight/(height/100)**2).toFixed(2);
}

export function showResultMessage(result){
    const message = `Seu IMC é de ${result}`;
    Modal.message.innerText = message;
    Modal.open();
}