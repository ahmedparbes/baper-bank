document.getElementById('deposite-button').addEventListener('click', function () {
    const depositeInput = document.getElementById('deposite-input');

    //////previous value ///

    const depositeValue = depositeInput.value;
    const depositeTotal = document.getElementById('deposite-total');

    ///previous and new added total////

    const totalValue = parseFloat(depositeValue) + parseFloat(depositeTotal.innerText);
    depositeTotal.innerText = totalValue;

    ///remove fieldtext///////

    depositeInput.value = '';

    //////final balace///////////

    const depositeFinal = document.getElementById('deposite-final');
    const depositeFinalValue = depositeFinal.innerText;
    const previousBalancetext = parseFloat(depositeFinalValue);
    const newBalanceTotal = previousBalancetext + totalValue;
    depositeFinal.innerText = newBalanceTotal;
})


////withdraw///

document.getElementById('withdraw-button').addEventListener('click', function () {
    ////withdraw input////
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawValue = withdrawInput.value;

    ///previous withdraw///

    const withDrawBox = document.getElementById('withdraw');
    const withdrawvaluesinbox = withDrawBox.innerText;

    ////total withdraw///

    const TotalWithdraw = parseFloat(withdrawValue) + parseFloat(withDrawBox.innerText);
    withDrawBox.innerText = TotalWithdraw;

    ///finalize//

    const finalize = document.getElementById('deposite-final');
    const finalValue = finalize.innerText;
    const finaltotal = parseFloat(finalValue);
    const finalizevalue = finaltotal - TotalWithdraw;
    finalize.innerText = finalizevalue;

    ///clear withdraw input//

    withdrawInput.value = '';
})