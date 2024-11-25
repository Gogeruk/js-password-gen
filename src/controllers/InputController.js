import readline from 'node:readline';
import {PasswordGenerator} from "../entities/PasswordGenerator.js";

export class InputController {

    /**
     * @returns {Promise<void>}
     */
    async input(){
        const readLineInterface = readline.createInterface({
            input: process.stdin,  // standard input stream (keyboard).
            output: process.stdout // standard output stream (terminal display).
        });

        /**
         * @param string
         * @returns {Promise<unknown>}
         */
        const question = (string) => {
            return new Promise((resolve) => {
                readLineInterface.question(string, resolve);
            });
        };

        try {
            let maxLengthStr = await question("Enter the desired password length (default 255): ");
            let maxLength = parseInt(maxLengthStr);
            if (isNaN(maxLength) || maxLength < 1) {
                console.log("Invalid input. Using default length of 255.");
                maxLength = 255;
            }

            let includeUppercaseStr = await question("Include uppercase letters? (y/n, default n): ");
            let includeUppercase = includeUppercaseStr.trim().toLowerCase() === 'y';

            let includeLowercaseStr = await question("Include lowercase letters? (y/n, default n): ");
            let includeLowercase = includeLowercaseStr.trim().toLowerCase() === 'y';

            let includeNumbersStr = await question("Include numbers? (y/n, default n): ");
            let includeNumbers = includeNumbersStr.trim().toLowerCase() === 'y';

            let includeSpecialStr = await question("Include special characters? (y/n, default n): ");
            let includeSpecial = includeSpecialStr.trim().toLowerCase() === 'y';

            if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecial) {
                console.log("No character sets selected. Defaulting to include lowercase letters.");
                includeLowercase = true;
            }

            // Create an instance of the PasswordGenerator with the collected parameters.
            const passwordGenerator = new PasswordGenerator(
                maxLength,        // max length of the password.
                includeUppercase, // include uppercase letters?
                includeLowercase, // include lowercase letters?
                includeNumbers,   // include numbers?
                includeSpecial    // include special characters?
            );

            const password = passwordGenerator.generatePassword();

            console.log(`\nGenerated Password: ${password}`);

            // finish by closing readLineInterface
            readLineInterface.close();
        } catch (error) {
            console.error(error);
            readLineInterface.close();
        }
    }
}