function Validation(values) {
    
    let error = {}
    // Checks email input and makes sure it's in the correct format
    // Pattern should be something like: "example@domain.com"
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    // Checks if the password is at least 8 characters long, 
    // contains at least one uppercase letter, one lowercase letter, and one number
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if (values.name === "") {
        error.name = "Name should not be empty"
    }

    else {
        error.name = ""
    }

    if (values.email === "") {
        error.email = "Email should not be empty"
    }

    else if (!email_pattern.test(values.email)) {
        error.email = "Email did not match"
    }
    else {
        error.email = ""
    }

    if (values.password === "") {
        error.password = "Password should not be empty"
    }

    else if (!password_pattern.test(values.password)) {
        error.password = "Password should be 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"
    }
    else {
        error.password = ""
    }

    return error;
}

export default Validation;