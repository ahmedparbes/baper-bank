document.getElementById('button').addEventListener('click', function () {
    let EmailField = document.getElementById('emailbox');
    const showEmail = EmailField.value;
    const PasswordField = document.getElementById('passwordbox');
    const showPassword = PasswordField.value;
    if (showEmail == 'ap@gmail.com' && showPassword == 'boss') {
        window.location.href = 'bankpage.html';
    }
    else {
        console.log("abbe salle komine ..thik kore password de");
    }

})