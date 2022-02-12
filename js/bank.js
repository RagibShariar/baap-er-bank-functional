const depositInput = document.getElementById('deposit-input');
const depositTotal = document.getElementById('deposit-total');
const balanceTotal = document.getElementById('balance-total');
const withdrawInput = document.getElementById('withdraw-input');
const withdrawTotal = document.getElementById('withdraw-total');

function add(inputField, total){
    return parseFloat(inputField) + parseFloat(total);
};

function updateBalance(prevBlanace, inputValue, withdraw){
    if ( withdraw == true ) {
        return parseFloat(prevBlanace) - parseFloat(inputValue);
    }
    else{
        return parseFloat(prevBlanace) + parseFloat(inputValue);
    }
};

// deposit 
function deposit(){
    depositTotal.innerText = add(depositInput.value, depositTotal.innerText);
    balanceTotal.innerText = updateBalance(balanceTotal.innerText, depositInput.value, false);
    depositInput.value = '';
};

// withdraw
function withdraw(){
    withdrawTotal.innerText= add(withdrawInput.value, withdrawTotal.innerText);
    balanceTotal.innerText = updateBalance(balanceTotal.innerText, withdrawInput.value, true);
    withdrawInput.value = '';
};