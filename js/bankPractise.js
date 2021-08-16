document.getElementById('button').addEventListener('click', function () {
    const emailInput = document.getElementById('email-input');
    const emailValue = emailInput.value;

    const passInput = document.getElementById('password-input');
    const passValue = passInput.value;

    if (emailValue == 'ap@gmail.com' && passValue == 'ap') {
        window.location.href = 'otherpage.html';
    }
    else {
        console.log('Please Type Exact Value..')
    }
})