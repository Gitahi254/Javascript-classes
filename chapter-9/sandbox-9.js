                //FILTER METHOD


//const scores = [10, 30, 15, 25, 50, 40, 5];

// const filteredScores = scores.filter((score) =>{ //filter method (it is none destructive)
//     return score > 20; //score is the parameter //output will be any score above 20
// });

// console.log (filteredScores);

// const users = [
//     {name: 'shaun', premium:true},
//     {name: 'Denno', premium:false},
//     {name: 'kim', premium:true},
//     {name: 'jamo', premium:false}
// ]; //we want to use the filter method to check for premium users

// const premiumUsers = users.filter(user =>{
//     return user.premium;
// });

// console.log(premiumUsers);


            //MAP METHOD

const prices = [10, 30, 15, 25, 50, 40, 5];

// const salePrices = prices.map((price) =>{
//     return price /2;  ///This will return all the prices as an array with the goven criteria
// });

// console.log (salePrices);

// const products = [
//     {name: 'gold star', price: 20},
//     {name: 'Makunu', price: 30},
//     {name: 'meroni', price: 40},
//     {name: 'clams', price: 70},
//     {name: 'pinapus', price: 100}
// ]; //we want to change the price to half price if the price is above 30

// const saleProducts = products.map(product => {
//     if(product.price >30){ ///products above 30 will be slashed by half
//         return {name: product.name, price: product.price/2};
//     } else{
//         return product;
//     }
// });

// console.log(saleProducts);


                        //REDUCE METHOD

const goals = [10, 80, 100, 25, 50, 40, 5];   ///ACC =>ACCUMULATOR  ///CURR => CURRENT
// const result = goals.reduce((acc, curr) =>{
//     if(curr > 50){
//         acc++;
//     }
//     return acc;
// }, 0);

// console.log(result);

// const scores = [  ///we want to add up the total score by roro
//     {player: 'roro', score: 20},
//     {player: 'Makunu', score: 30},
//     {player: 'roro', score: 40},
//     {player: 'oyugis', score: 70},
//     {player: 'wanjala', score: 100}
// ];

// const roroTotal = scores.reduce((acc,curr) =>{
//     if (curr.player === 'roro'){
//         acc += curr.score;
//     }
//     return acc;
// }, 0);

// console.log(roroTotal);


                        /// FIND METHOD

const mabao = [10, 40, 100, 25, 50, 40, 5];   ///ACC =>ACCUMULATOR  ///CURR => CURRENT

// const firstHighScore = mabao.find((bao) =>{
//     return bao > 50;
// });

// console.log(firstHighScore);


                            /// SORT METHOD

    ///EXAMPLE 1 {SORTING STRINGS}
const majina = ['denno', 'kimani', 'jane', 'mugambi', 'nyasembo'];
///LETS TRY AND SORT THE NAMES OUT IN ALPHABETICAL ORDER
majina.sort();

///HOW TO REVERSE THE ARRAY
majina.reverse();

console.log(majina); ///This is destructive because it brings out a new array



    ///EXAMPLE 2 {SORTING NUMBERS}
const num = [10, 20, 40, 170, 67, 5]

num.sort();
///console.log(num);



    ///EXAMPLE 3{SORTING OBJECTS}
const players = [  ///we want to add up the total score by roro
    {name: 'roro', score: 20},
    {name: 'Makunu', score: 30},
    {name: 'roro', score: 40},
    {name: 'oyugis', score: 70},
    {name: 'wanjala', score: 100}
];

players.sort((a,b) =>{     ///--->This is a longer version
    if(a.score > b.score){
        return -1;
    }else if (b.score > a.score){
        return 1;
    }else{
        return 0;
    }
});


players.sort((a,b) => b.score - a.score);   ///--->This is a shorter way

console.log(players);


            ///CHAINING ARRAY METHODS

///1. We want to filter products above the price of 20
//2. we want to take the filtered array to a new array formated with price
const products = [
    {name: 'gold star', price: 20},
    {name: 'Makunu', price: 30},
    {name: 'meroni', price: 40},
    {name: 'clams', price: 70},
    {name: 'pinapus', price: 100},
    {name: 'mango', price: 10},
    {name: 'panana', price: 80},
    {name: 'lichi', price: 0}
];

///LONG METHOD
// const filtered = products.filter(product => product.price >20);

// const promos = filtered.map(product => {
//     return `the ${product.name} is ${product.price /2} bob`;
// });

///SHORT METHOD
const promos = products
    .filter(product => product.price >20)
    .map(products => `the ${product.name} is ${product.price /2} bob`);

console.log(promos);