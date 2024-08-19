const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");
//per le animazioni un array di oggetti
const animationData = [
  {
    inputVal: 5,
    marginTop: 300,
    addElDelay: 1000,
    msg: 'decimalToBinary(5) restituisce "10" + 1 (5 % 2). Quindi esce dallo stack.',
    showMsgDelay: 15000,
    removeElDelay: 20000,
  },
  {
    inputVal: 2,
    marginTop: -200,
    addElDelay: 1500,
    msg: 'decimalToBinary(2) restituisce "1" + 0 (2 % 2) e fornisce quel valore allo stack sottostante. Quindi esce dallo stack.',
    showMsgDelay: 10000,
    removeElDelay: 15000,
  },
  {
    inputVal: 1,
    marginTop: -200,
    addElDelay: 2000,
    msg: "decimalToBinary(1) restituisce '1' (caso base) e fornisce quel valore allo stack sottostante. Quindi esce dallo stack.",
    showMsgDelay: 5000,
    removeElDelay: 10000,
  }
];

//funzione ricorsiva per la conversione da decimale a binario
const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return String(input); //ritorna, sottoforma di stringa, il valore 0 o 1
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
    //ritorna la funzione ricorsiva, fino a che input non sarà 0 o 1
  }
};

//si attiva solo quando si invia il numero 5
const showAnimation = () => {
  result.innerText = "Animazione dello stack di chiamate";

  //per ogni elemento dell'array (formato da oggetti con proprietà)
  //obj è l'array animationData
  animationData.forEach((obj) => {

    //è un metodo per eseguire un blocco di codice dopo un dato periodo di tempo
    //infatti obj.addElDelay è il tempo di ritardo
    //qui compare il paragrafo
    setTimeout(() => {
      animationContainer.innerHTML += `
        <p id="${obj.inputVal}" style="margin-top: ${obj.marginTop}px;" class="animation-frame">
          decimalToBinary(${obj.inputVal})
        </p>
      `;
    }, obj.addElDelay);

    //poi compare il messsaggio
    setTimeout(() => {
      document.getElementById(obj.inputVal).textContent = obj.msg;
    }, obj.showMsgDelay);

    //poi viene tolto il messaggio
    setTimeout(() => {
      document.getElementById(obj.inputVal).remove();
    }, obj.removeElDelay);
  });

  //finita l'animazione, compare il result il binario del decimale 5
  setTimeout(() => {
    result.textContent = decimalToBinary(5);
    numberInput.value = "";
  }, 20000);
};

//funzione per il controllo preventivo del dato fornito e la gestione delle funzioni successive
const checkUserInput = () => {
  //parseInt serve per analizzare la stringa e restituire un numero intero.
  const inputInt = parseInt(numberInput.value);

  //controllo del dato: se inputInt è vuota o null, se è indefinito, o minore di 0, allora alert ed esce dalla funzione
  if (!inputInt || isNaN(inputInt) || inputInt < 0) {
    alert("Fornisci un numero decimale maggiore o uguale a 0");
    return;
  }

  //se il valore è uguale a 5, allora fa partire un'animazione asyncrona ed esce da questa funzione
  if (inputInt === 5) {
    showAnimation();
    return;
  }

  //il risultato appare chiamando la funzione ricorsiva sottostante e svuota l'input
  result.textContent = decimalToBinary(inputInt);
  numberInput.value = "";
};

//al click del button fa partire la funzione
convertBtn.addEventListener("click", checkUserInput);

//se il focus è nell'input del numero e premo invio, fa partire la funzione
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});