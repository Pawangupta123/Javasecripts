//Reduce Methode

// const myNums = [1,3,4,5,6,7]
// // const Total = myNums.reduce(function(acc,curr){
// //     console.log(`acc: ${acc}, curr: ${curr}`);

// // return acc + curr},0);
// const Total = myNums.reduce((acc,curr) => acc + curr, 0);
//     //console.log(`acc: ${acc}, curr: ${curr}`);

// console.log(Total); // 26

const ShoppingCart = [
    {
        name: 'T-Shirt',
        price: 20,
        quantity: 2
    },
    {
        name: 'Jeans',
        price: 50,
        quantity: 6
    },
    {
        name: 'Shirt',
        price: 100,
        quantity: 8
    }];

const TaotalShoppingCart = ShoppingCart.reduce((acc,iteam) => (acc+iteam.price),0);
console.log(TaotalShoppingCart); // 26


