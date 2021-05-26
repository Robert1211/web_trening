console.log('fff')
//create object like bankomat////
// conect html with functions and buttons
const balanceAtm = {
  saving: 0,
  checking:0
}

/*//first budujemy logike
 //Add functionality so that a user can deposit money into one of the bank accounts.//*/



$('#checking-balance').css('background-color','red')



const UpdateScreen = function(bankBalance){

$('#checking-balance').html(parseInt(bankBalance.checking));

$('#savings-balance').html(parseInt(bankBalance.saving));
if(bankBalance.checking > 0){
$('#checking-balance').css('background-color' ,'grey')
}else{
  $('#checking-balance').css('background-color','red')
}
}

const deposit = function(amount, account){
  balanceAtm[account] = balanceAtm[account] + parseInt(amount)
  UpdateScreen(balanceAtm)
};


$('#checking-deposit').on('click', function(){
let num = $('#checking-amount').val()
deposit(num, 'checking');
})

//  if(balanceAtm[account] = 0){
//  $('#checking-balance').css('background-color','yellow')
//  }
const withdraw = function(amount, account){
  if(balanceAtm[account] >= parseInt(amount)){

  balanceAtm[account] = (balanceAtm[account]) - (parseInt(amount))
}
  UpdateScreen(balanceAtm)
}
$('#checking-withdraw').on('click', function(){
  let num1 = $('#checking-amount').val()
  withdraw(num1, 'checking');
})
