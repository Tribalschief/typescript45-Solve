//task 26
let alien_color = ['green', 'yellow', 'red'][Math.floor(Math.random() * 3)] as 'green' | 'yellow' | 'red';
if (alien_color === 'green'){
    console.log("The player just earned 5 points");
} else if (alien_color === 'yellow'){
    console.log("The player just earned 10 points");
}
