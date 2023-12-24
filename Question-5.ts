
// Question-5: Create a function that takes a positive integer as parameter and uses a for loop to calculate
// and return the factorial of that number.


function factorial(a:number){
    for(let i=a; i>1;){
        i=i-1
        let fact=a*i
        a=fact
    }
    console.log(a);
    
}
factorial(0)







