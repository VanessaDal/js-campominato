// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

//creo funzione per pc che genera numeri casuali
//che non si ripetono

function arrRandomNumbers(min, max,repetition){      
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

  var arrPc=arrRandomNumbers(1,100,16)
  console.log (arrPc)

  //creo funzione per chiedere all'utente tot numeri

  var userNumbersArr=[];

  function userBet(max,lastBet){
    var i=1;
    var numero=parseInt(prompt("inserisci un numero"));
    while (userNumbersArr.length<=lastBet && i<=max){
        if(arrPc.includes(numero)===false){
            if(userNumbersArr.includes(numero)===false)
            {userNumbersArr.push(numero);
            numero=parseInt(prompt("inserisci un altro numero"));
            i++;
            console.log(userNumbersArr);
            } else if(userNumbersArr.includes(numero)===true || numero>100) { numero=parseInt(prompt("inserisci un altro numero"));
            i--;
            console.log(userNumbersArr);}

        } else if (arrPc.includes(numero)===true){
            console.log("hai perso con il numero "+numero);
            userNumbersArr.push(numero);
            console.log (userNumbersArr);
            console.log ("Il tuo punteggio è " +userNumbersArr.length)
            return userNumbersArr;
        } else if (userNumbersArr.length===lastBet){
            console.log("hai vinto!!!!!")
            userNumbersArr.push(numero);
            console.log (userNumbersArr);
            return userNumbersArr;
        }
    }
  }

  userBet(100,84)
