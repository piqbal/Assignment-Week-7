
// //Question-7:  Create a function that takes an array of numbers as parameter . Use a for loop to
// //calculate and return the  sum of all the numbers in the array .


function calculate(numbers:number[], sum:number){
    
    for(let i= 0; i<numbers.length; i++){
      sum += numbers[i]
     }
     console.log(sum);
     
}


calculate([10,20,30,40,50], 0)






