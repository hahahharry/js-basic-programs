function maths(input) {

    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let operator = input[2];

    finalSum = 0;
    check = '';
    isTrue = true;


    if(operator === "+") {
        finalSum = N1 + N2;
        if(finalSum % 2 === 0) {
            check = "even";
        } else {
            check = "odd";
        }
    } else if (operator === "-") {
        finalSum = N1 - N2;
        if(finalSum % 2 === 0) {
            check = "even";
        } else {
            check = "odd";
        }
    } else if(operator === "*") {
        finalSum = N1 * N2;
        if(finalSum % 2 === 0) {
            check = "even";
        } else {
            check = "odd";
        }
    } else if(operator === "/") {
        if(N2 !== 0) {
            finalSum = N1 / N2;
        } else {
            isTrue = false;
        }
    } else if(operator === "%") {
        if(N2 !== 0) {
            finalSum = N1 % N2;
        } else {
            isTrue = false;
        }
    }

    if(isTrue === true) {
        if(operator === "+" ||operator === "-" || operator === "*") {
            console.log(`${N1} ${operator} ${N2} = ${finalSum} (${check})`);
        } else if(operator === "/") {
            console.log(`${N1} ${operator} ${N2} = ${finalSum.toFixed(2)}`);
        } else if(operator === "%") {
            console.log(`${N1} ${operator} ${N2} = ${finalSum}`);
        }
    } else {
        console.log(`Cannot divide ${N1} by zero `);
    }
}
maths(["-7","124","*"]);