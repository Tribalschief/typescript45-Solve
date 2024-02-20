//task 25
//pass version
let alien_color = ['green', 'yellow', 'red'][Math.floor(Math.random() * 3)] as 'green' | 'yellow' | 'red';


if(alien_color === 'green'){
    console.log("that the player just earned 5 points")
} 
/*
// fail version
let alien_color = 'red' 
if(alien_color === 'yellow'){
    console.log("that the player just earned 10 points")
}*/