//task 33
let numbers:number[] = [1,2,3,4,5,6,7,8,9];
for(let i=0;i<numbers.length;i++) {
    if(numbers[i] === 1) {
        console.log(`${numbers[i]}st`)
    }
    else if(numbers[i] === 2) {
        console.log(`${numbers[i]}nd`)
    }
    else if(numbers[i] === 3) {
        console.log(`${numbers[i]}rd`)
    }
    else
    console.log(`${numbers[i]}th`)
}