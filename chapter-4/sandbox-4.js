        // FUNCTION DECLARATION
//how to write a function
function greet(){
    console.log('oya gathee')
}

        // FUNCTION EXPRESSION
//how to call a function

const speek = function(){
    console.log('This is a function stored in a constant')
};

greet();
speek();

        // ARGUMENTS AND PARAMETERS

const speak = function(name = 'Shawn', time = 'night'){
    console.log(`good ${time} ${name}`)
};

speak('Gitahi!', 'morning');
speak();
speak('Kimani!!');
speak( '', 'afternon');


        //RETURNING VALUES

// const calcArea = function(radius){
//     return 3.142 * radius**2;
// };

// const area = calcArea(5);
// console.log(area);

//trial example using the area to calculate the volume
// const calcVol = function(area){
//     return 2 * area ;
// };
// const vol = calcVol(area);
// console.log(vol);

        // ARROW FUNCTION

const calcArea = (radius) =>{
    return 3.14 * radius**2;
};

const area = calcArea(5);
console.log('The area is: ', area);

//practice arrow functions

//1.Normal function
const games = function(){
    return 'Game is chess';
};

// solution
const goGame = () =>{
    return 'shess';
};
const result = goGame();
console.log(result);

        // FUNCTIONS VS METHODS

const hisName = () =>'shawn';
//the above is written in arrow function
let resultOne = hisName();
console.log(resultOne);

        // METHODS

let resultTwo = resultOne.toUpperCase();
//.toUpperCase is a method in this case
console.log(resultTwo);
 

        // CALLBACKS & FOREACH
//call back functions are normal functions which we pass as arguments
const myFunc = (callbackfunc) =>{
    // do something
    let value = 50;
    callbackfunc(value);
};

myFunc(value  => {
    //do something
    console.log(value);
});

//.foreach itariates over na array more like a loop
let people  = ['mario','luigi', 'gitahi', 'kimani']; 

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);

