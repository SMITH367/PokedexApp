const lengthValidation = (string) => {

    return string.length > 0
    
}

const rangeValidation = (number) => {
    return number < 898
}

export {
    lengthValidation,
    rangeValidation
}