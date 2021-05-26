// Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:
// 9999-9999-8888-0000
// 6666-6666-6666-1666
//
// The following credit card numbers are invalid:
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number









const numberCheck = function(cardNum){
  cardNum = cardNum.replace(/-/g,""); //first replace (-)w ciagu liczg bez zadnych przerw
  if(cardNum.length !== 16){         // tutaj juz sprawdza ciag liczb bez przerw co wykonal wczesniej czy jest dlugi na 16zankow
  return false;
  }
  if( isNaN(cardNum)){            //tutaj sprawdzamy czy sa tylko numery niem ma zadnych liter
  return false;
  }
  if(cardNum[15] % 2 !== 0){      //dlatego 15 ostatni numer indexu poniewaz testujemy liczbe nie dlugosc
  return false;
  }
                                     // The sum of all the digits must be greater than 16
  const arr = cardNum.split('');     //jesli doszlo do tego miejsca to rozdziela ciag liczg przerwa aby je dodac
  let sum = 0;                     //jak juz jest podzielone to musimy je pododawac zaczynajac od 0!!!!!
  for(var i = 0; i < arr.length; i++){        // aby to wszystko pododawac musimy zrobi petle dla calego indexu
  sum = sum + arr[i];
  }
  if(sum < 17){
    return false;
  }
  let differentChar = true
  for(var i = 0 ; i < cardNum.length; i++){
    if(cardNum[i] !== cardNum[0]){
    differentChar = false;
    }
  }                                //tutaj sprawdzamy czy znaki nie sa takie same
  if (differentChar === true){
    return false;
  }
    return true;


  //console.log(cardNum);
}



let testCases = [
  "9999-9999-8888-0000",
  "6666-6666-6666-1666",
  "a923-3211-9c01-1112",
  "4444-4444-4444-4444",
  "1111-1111-1111-1110",
  "6666-6666-6666-6660"
]

for (var i = 0; i < testCases.length; i++) {
  console.log(testCases[i], numberCheck(testCases[i]))
}
