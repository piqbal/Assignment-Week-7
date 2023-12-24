
//Question-6: Write a program having an array of numbers if the number is negative it should remove the
//  negative number from the arry.



let numbers1:number[]=[1,2,3,-4,5,6,7]
for(let i=0; i<numbers1.length; i++){
    if(numbers1[i] < 0){
        delete numbers1[i]
        console.log(numbers1);
        
    }
}










