function Validation(values) {
    
    let error = {}
    // Checks email input and makes sure it's in the correct format
    // Pattern should be something like: "example@domain.com"
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (values.email === "") {
        error.email = "Email should not be empty"
    }

    else if (!email_pattern.test(values.email)) {
        error.email = "Email does not match the correct format"
    }
    else {
        error.email = ""
    }

    if (values.password === "") {
        error.password = "Password should not be empty"
    }

    else {
        error.password = ""
    }

    return error;
}

export default Validation;