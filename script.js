function getInputValue(inputId){
  const inputField =document.getElementById(inputId)
  const amountText = inputField.value;
  const amount=parseFloat(amountText);
  
  inputField.value = '';
  return amount;
}

function updateTotalField(totalFieldId, depositAmount){
  const totalField = document.getElementById(totalFieldId);
  const previousAmountText= totalField.innerText
  const previousAmount = parseFloat(previousAmountText)
  totalField.innerText = previousAmount + depositAmount

}

function getCurrentBalance(){
  const amountTotal = document.getElementById('balance-total');
  const amountTotalText = amountTotal.innerText;
  const previousAmountTotal = parseFloat(amountTotalText);
  return previousAmountTotal
}

function updateBalance(amount, isAdd){
  const amountTotal = document.getElementById('balance-total');
  const previousAmountTotal = getCurrentBalance()
  if(isAdd == true){
    amountTotal.innerText = previousAmountTotal + amount
  }
  else{
    amountTotal.innerText = previousAmountTotal - amount
  }
  
}


document.getElementById('deposit-btn').addEventListener('click', function(){
 
const depositAmount = getInputValue("deposit-input");
if(depositAmount > 0){
  updateTotalField('deposit-total', depositAmount)
  updateBalance(depositAmount, true);
}

})


document.getElementById('withdraw-btn').addEventListener('click', function(){
  const withdrawAmount = getInputValue('withdraw-input');
  const currentBalance = getCurrentBalance()
  if(withdrawAmount>0 && withdrawAmount < currentBalance){
    updateTotalField('withdraw-total', withdrawAmount)
    updateBalance(withdrawAmount, false)
  
  }
  
})