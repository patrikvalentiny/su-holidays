export const validateCPR = (cpr: string): boolean => {
    // Format: DDMMYY-SSSS (10 digits with hyphen) or DDMMYYSSSS (10 digits)
    const cprRegex = /^(\d{6}-\d{4}|\d{10})$/
    return cprRegex.test(cpr)
}

export const validateCVR = (cvr: string): boolean => {
    // Format: 8 digits
    const cvrRegex = /^\d{8}$/
    return cvrRegex.test(cvr)
}
