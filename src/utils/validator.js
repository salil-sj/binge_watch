export  const emailValidation = (email)=>{
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email)
}

export const passwordValidation = (password)=>{
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    return re.test(password)
}

/*
At least 8 characters
Contains at least one uppercase letter
Contains at least one lowercase letter
Contains at least one digit
Contains at least one special character (e.g., !@#$%^&*)
*/