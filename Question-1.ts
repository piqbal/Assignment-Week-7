
// Question=1: Create a function that takes an array, an index, and a value as parameters. Inside the function, 
// use the splice method to insert the value at the specified index in the array . Return the modified Array. 

function insert(arr:number[], index:number[], value:number){

    let newarray=arr.splice(0,1,12)
    let modify=newarray.unshift(15)
    console.log(arr);
    
    
}
insert([1,2,3,4,5,6], [0], 10)




