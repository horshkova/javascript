//const userName = prompt('Enter your name');
//const greet = 'Hello ' + userName;
//alert (greet);


//const nextAge = userAge + 1;
//alert (nextAge);

// const userAge = parseInt(prompt('Enter your age!'));
// if (userAge < 18) {
//     alert('Child');
// } if (userAge < 80) {
//     alert('Adult');
// } else {
//     alert('Old');
// }

// function sum(a, b) {
//     const result = a + b;
//     return result;
// }

// let sumOfNums = sum(10, 20);
// alert(sumOfNums);
// sumOfNums = sum(20, 30);
// alert(sumOfNums);

function sum(a, b, c) {
     const result = a + b + c;
    return result;
}

let sumOfThree = sum(5, 15, 25);
alert(sumOfThree);
sumOfThree = sum(3, 13, 23);
alert(sumOfThree);





const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c 

const result = solveQuadraticEq(a, b, c);
alert(result);

function solveQuadraticEq(a, b, c) {
    const d = calcDiskr(a, b, c);
    if (d > 0) {
       const x1 = 
       const x2 = 
       return result = 'x1 ' + x1 + ' x2 ' + x2;
    } else if (d === 0) {
        const x = ????
        return 'x = ' + x;
    }
    return 'No roots!';
    
    
}

function calcDiskr(a, b, c) {
    const d = b * b - 4 * a * c;
    return d;
}

//const message = 'Вітаємо на нашому сайті';
//const greetings = 'Hello'+'!';
//alert(greetings);
//alert(message);


