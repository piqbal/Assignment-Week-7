
// Question-2: Implement a simple shoppong cart program using an array. Create functions to add items, remove 
// items, and update quantities using the splice method. Print the cart's contents after each operation.


 
let cart:string[]=["fruites", "vegetables", "meat", "seafood", "electronics", "crockery"]

function add(addlastitem:string[]){
    let additem=cart.splice(1,0, "fashion")
    console.log(cart);
}
add(cart)


function remove(removefirstitem:string[]){
    let removeitem=cart.shift()
    console.log(cart);
}
remove(cart)


function update(updatecrockery:string[]){
    let updateitem=cart.splice(4,1,"mobiles")
    console.log(cart);
}
update(cart)


