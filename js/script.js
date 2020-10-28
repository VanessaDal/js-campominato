// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

//pc genera numeri casuali



function pcRandomNumbers(min, max,repetition){      
    var array=[];
    var i=1;
    while (array.length<repetition && i<=repetition+1){
    var a=Math.floor(Math.random() * (max - min + 1)) + min;
    if (array.includes(a)===false){
        array.push(a)
        i++
    } else{i--}
    
    }
    return array;
  }

  var arrPc=pcRandomNumbers(1,100,16)
  console.log (arrPc)