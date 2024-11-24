export class PasswordGenerator {

    /**
     * @type {number}
     */
    // private maxLength: number;

    /**
     * @type {boolean}
     */
    // public includeUppercase: boolean;

    /**
     * @type {boolean}
     */
    // public includeLowercase: boolean;

    /**
     * @type {boolean}
     */
    // public includeNumbers: boolean;

    /**
     * @type {boolean}
     */
    // public includeSpecial: boolean;

    /**
     * @param maxLength
     * @param includeUppercase
     * @param includeLowercase
     * @param includeNumbers
     * @param includeSpecial
     */
    constructor(
        maxLength = 255,
        includeUppercase = false,
        includeLowercase = false,
        includeNumbers = false,
        includeSpecial = false
    ) {
        this.maxLength = maxLength;
        this.includeUppercase = includeUppercase;
        this.includeLowercase = includeLowercase;
        this.includeNumbers = includeNumbers;
        this.includeSpecial = includeSpecial;
    }

    /**
     * @param length
     */
    // setMaxLength(length) {
    //     if (length < 1) {
    //         throw new Error("Password length must be at least 1.");
    //     }
    //
    //     this.maxLength = length;
    // }

    /**
     * @returns {number}
     */
    // getMaxLength() {
    //     return this.maxLength;
    // }

    /**
     * @returns {string}
     */
    generatePassword() {
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const numberChars = "0123456789";
        const specialChars = "!@#$%^&*()";

        let charSetsInPassword = "";
        if (this.includeUppercase) {charSetsInPassword += uppercaseChars}
        if (this.includeLowercase) {charSetsInPassword += lowercaseChars}
        if (this.includeNumbers) {charSetsInPassword += numberChars}
        if (this.includeSpecial) {charSetsInPassword += specialChars}

        if (charSetsInPassword.length === 0) {
            throw new Error("At least one character set must be selected.");
        }

        // generate a password based on char sets
        let generatedPassword = "";
        for (let i = 0; i < this.maxLength; i++) {
            const randomIndex = Math.floor(Math.random() * charSetsInPassword.length);
            generatedPassword += charSetsInPassword[randomIndex];
        }

        return generatedPassword;
    }
}