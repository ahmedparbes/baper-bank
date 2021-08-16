document.getElementById('deposite-button').addEventListener('click', function () {
    const dipositeInput = document.getElementById('deposite-input');
    const depositeValue = dipositeInput.value;

    const depositeTotal = document.getElementById('deposite-total');
    const totalDipositeValue = parseFloat(depositeValue) + parseFloat(depositeTotal.innerText);

    depositeTotal.innerText = totalDipositeValue;

    dipositeInput.value = '';

    const finalLocation = document.getElementById('deposite-final');
    const finalLocationvalue = finalLocation.innerText;
    const finalLocationvalueConvert = parseFloat(finalLocationvalue);

    const totalinCash = finalLocationvalueConvert + totalDipositeValue;
    finalLocation.innerText = totalinCash;
})


///withdraw section/////

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawValue = withdrawInput.value;

    const withdraw = document.getElementById('withdraw');
    const withdrawvalueIn = withdraw.innerText;

    const TotalWithdrawAmount = parseFloat(withdrawvalueIn) + parseFloat(withdrawValue);
    withdraw.innerText = TotalWithdrawAmount;

    const withdrawfinalLocation = document.getElementById('withdraw-final');
    const withdrawfinalLocationvalue = withdrawfinalLocation.innerText;
    const withdarwfinalLocationvalueConvert = parseFloat(withdrawfinalLocationvalue);

    const final = TotalWithdrawAmount - withdarwfinalLocationvalueConvert;
    withdrawfinalLocation.innerText = final;

    withdrawInput.value = '';

})