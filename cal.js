function calculate(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        // Validate inputs
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            return reject(new Error("Both inputs must be numbers."));
        }

        switch (operation) {
            case 'add':
                resolve(num1 + num2);
                break;
            case 'subtract':
                resolve(num1 - num2);
                break;
            case 'multiply':
                resolve(num1 * num2);
                break;
            case 'divide':
                if (num2 === 0) {
                    reject(new Error("Division by zero is not allowed."));
                } else {
                    resolve(num1 / num2);
                }
                break;
            default:
                reject(new Error("Invalid operation. Use 'add', 'subtract', 'multiply', or 'divide'."));
                break;
        }
    });
}

calculate(10, 5, 'add')
    .then(result => console.log(`Add Result: ${result}`))
    .catch(error => console.error(`Error: ${error.message}`));

calculate(10, 5, 'subtract')
    .then(result => console.log(`Sub Result: ${result}`))
    .catch(error => console.error(`Error: ${error.message}`));
    
calculate(10, 0, 'divide')
    .then(result => console.log(`Div Result: ${result}`))
    .catch(error => console.error(`Error: ${error.message}`));

calculate(10, 5, 'multiply')
    .then(result => console.log(`Mul Result: ${result}`))
    .catch(error => console.error(`Error: ${error.message}`));

