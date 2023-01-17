
// Assignment 1 - Use iteration
const fibs = (number) => {
    let sequence = [];

    for (let i = 0; i < number; i++) {
        if ((sequence[0] == null) || (sequence[1] == null)) {
            sequence.push(i);
        } else {
            let fibNumber = sequence[sequence.length -1] + sequence[sequence.length -2];
            sequence.push(fibNumber);
        };
    };
    console.log("Iteration:", sequence);
};
fibs(8);
