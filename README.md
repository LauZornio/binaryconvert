## 🔢 Convertitore Decimale a Binario
Benvenuto nel progetto **"Convertitore Decimale a Binario"!** 🚀 Questo strumento ti permette di convertire facilmente numeri decimali in binari direttamente dal tuo browser. Inoltre, include una simpatica animazione che mostra come la ricorsione funziona internamente per un numero specifico.
Digita il numero 5!!!!!!

## 🚀 Funzionalità
**Conversione Rapida**: Inserisci un numero decimale e ottieni istantaneamente il corrispondente valore binario.
**Animazione Esplicativa**: Inserisci il numero "5" per vedere un'animazione passo-passo che spiega come funziona la ricorsione per la conversione da decimale a binario.

## 📚 JavaScript
**Funzione Ricorsiva**: La ricorsione è una tecnica di programmazione in cui una funzione chiama sé stessa per risolvere una parte del problema complessivo. Ogni chiamata ricorsiva dovrebbe ridurre il problema in modo tale che, alla fine, si raggiunga un caso base che non richiede ulteriori chiamate ricorsive.
**Funzione parseInt()**: serve per convertire da stringa a numero intero.

**(e.key === "Enter")**: consente di avviare la conversione premendo il tasto "Enter" mentre il campo di input è attivo, anziché dover cliccare sul pulsante di conversione.
    numberInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        checkUserInput();
      }
    });

**setTimeout**: animazione per eseguire un blocco di codice dopo un periodo di tempo.
