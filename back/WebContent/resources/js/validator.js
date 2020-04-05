function signup_validate(form){

    let login = document.getElementByName("login").value;
    let password = document.getElementByName("password").value;
    let repeat_password = document.getElementByName("repeatPassword").value;
    
    if (password !== repeat_password)
        error = "Пароли не совпадают!";

    if (error){
    	alarm(error);
        return false;
    } else
        return true;
}

function dots_validate(form){
    let x = form.X.value;
    let y = form.Y.value;
    let r = form.R.value;
    let error;

    if (y <= -5 || y >= 3) { error = "Y - incorrect value range"; }
    if (isNaN(y)) { error = "Y value is incorrect !"; }
    if (y === "") { error = "Y is empty !"; }
    if (y.length > 7) { error = "Y is too large !"; }

    if (r <= 0) { error = "R is negative !"; }

    if (error){
        alarm(error);
        return false;
    } else
        return true;
}