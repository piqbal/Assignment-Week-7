//Question-8: Implement a program that takes a list of temperatures in Celsius as input from the user.
// Convert  each temperature to Farhenheit using formula F=(C*9/5) + 32 and store the converted temperature
// in an array . Use a for loop to perform the conversation for each temperature. 


let temp1:number=45
let temp2:number=40
let temp3:number=37

let farhenheit1=(temp1*9/5)+32
let farhenheit2=(temp2*9/5)+32
let farhenheit3=(temp3*9/5)+32

let temperatures:number[]=[farhenheit1, farhenheit2, farhenheit3]
for(let i=0; i<temperatures.length; i++){
    console.log(temperatures[i]);
}

















