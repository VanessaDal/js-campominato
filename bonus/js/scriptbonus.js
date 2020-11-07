// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

//creo funzione per pc che genera numeri casuali
//che non si ripetono

// var difficolta=parseInt(prompt("scegli il livello di difficoltà tra 0, 1 e 2"));

var difficolta;

var max;

if (difficolta.value==0){
    max=100;
} else if (difficolta.value==1){
    max=80;
} else if (difficolta.value==2){
    max=50;
}

difficolta.addEventListener("click",
function arrRandomNumbers(min,repetition){      
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
)

// function arrRandomNumbers(min,repetition){      
//     var array=[];
//     var i=1;

//     while (array.length<repetition && i<=repetition+1){
//         var a=Math.floor(Math.random() * (max - min + 1)) + min;
//         if (array.includes(a)===false){
//             array.push(a)
//             i++
//         } else{i--}
    
//         }
//     return array;
//   }

  var arrPc=arrRandomNumbers(1,16)
  console.log ("debug ",arrPc)

  //creo funzione per chiedere all'utente tot numeri

  var userNumbersArr=[];

  function userBet() {
    var i=1;
    var lastBet=max- arrPc.length;
    var numero=parseInt(prompt("inserisci un numero"));
    numero;
    
    while (userNumbersArr.length<=lastBet && i<=max){
        if(arrPc.includes(numero)===false){
            if(userNumbersArr.includes(numero)===false && isNaN(numero)===false &&numero<=max)
                {userNumbersArr.push(numero);
                console.log("Yay! "+numero+ " non era una mina.")
                numero=parseInt(prompt("inserisci un altro numero"));
                i++;
                console.log("debug ",userNumbersArr);
                } else if(userNumbersArr.includes(numero)===true || numero>max || isNaN(numero)===true) { 
                console.log("Il numero inserito non è valido.")
                numero=parseInt(prompt("inserisci un altro numero"));
                
                i--;
                console.log("debug ",userNumbersArr);}

        } else if (arrPc.includes(numero)===true){
            console.log("Mi dispiace, hai perso! Il numero "+numero+ " era una mina!");
            userNumbersArr.push(numero);
            console.log ("debug ",userNumbersArr);
            console.log ("Il tuo punteggio è " +userNumbersArr.length)
            return userNumbersArr;
        } else if (userNumbersArr.length===lastBet){
            console.log("Complimenti,hai vinto!!!!!")
            userNumbersArr.push(numero);
            console.log ("debug ",userNumbersArr);
            return userNumbersArr;
        }
    }
  }


  inizio.addEventListener("click",userBet)
