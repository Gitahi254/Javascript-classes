                 //strings
console.log('My name is Gitahi');

let gmail = ('forevergitahi@gmail.com');
console.log(gmail);



//string concatinations
let firstName = ('Gitahi');
let middleName = ('wa');
let lastName = ('Maina');

let fullName = (firstName + ' ' + middleName + ' ' + lastName);
console.log(fullName);


//string characters
        //-----JS starts counting charachters from thr number zero!!-----
        //-----that includes the space in between words----
console.log(fullName[4]);


//string length
console.log(fullName.length);


//string methods
console.log(fullName.toUpperCase());

let index = gmail.indexOf('@');
console.log(index);




                //NUMBERS  <-- //

let radius = ('10');
const pi = ('3.142');
console.log(radius,pi);

//number operations (+ , - , / , * , ** , %)
console.log(10/2);
console.log(28/2);  

let area = pi * radius**2;
// BODMAS
// let result = 5 *(10-3)**2 ;
console.log(area);

let views = 10;
// likes = likes + 1
// likes++;
// likes--;

// likes +=10;
//likes -=5;
//likes *=2;
//likes /+2;

console.log(views);

//NaN - Not a number
console.log(5*'hello');

//how to concatinate numbers
let sentence = 'The blog has ' + views + ' views on Instagram';
console.log(sentence);




                //TEMPLATE STRINGS
const title = 'The sun and the moon';
const author = 'Gitahi';
const likes = 30;


//concatination way
let result1 = 'The blog called ' + title + ' which was written by ' + author + ' has a total of ' + likes + ' likes on Reddit'
console.log(result1);

// template string way
let result2 = `The blog called ${title} by ${author} has ${likes} likes on Instagram`;
console.log(result2);

//creating HTML templates 
let html =`
        <h2>${title}</h2>
        <p> By ${author}</p>
        <span> This blog has ${likes} likes on twitter</span>
        `;
console.log(html);



                 //ARRAYS
let ninjas = ['Mercedes', 'Atenza', 'Land rover'];

ninjas[1] = 'Golf';
console.log(ninjas[1]);

let ages = [20,23,19,32];
console.log(ages[3]);

console.log(ninjas.length);

//array methods

// let result = ninjas.join(',');
// let result = ninjas.indexOf('Golf');
// let result = ninjas.concat(['Fortuner', 'Tour Van']);
let result = ninjas.push('Coaster')
result = ninjas.pop();
console.log(result);


                //NULL AND UNDEFINED
let miaka = null;
console.log(miaka, miaka + 3 , `the age is ${miaka}`);



                 //BOOLEANS AND COMPARISONS
console.log(true,false);

//Methods can return booleans
let email = 'gitahimaina101@gmail.com';
let majina = ['babu', 'kijana' , 'kaboi']

        // let account = email.includes('!');
let account = majina.includes('sponyo')
console.log (account);

//Comparison operators
let age = 25;
console.log(age == 25);
console.log(age == 50);
console.log(age != 30); 
console.log(age > 29);
console.log(age < 25);
console.log(age <= 25);
console.log(age >= 25);

let maritwa = 'Tuirio twega';
console.log(maritwa == 'Tuirio twega')
console.log(maritwa == 'tuirio twega')


                 //LOOSE COMPARISONS(DIFERENT TYPES CAN ALSO BE EQUAL)

let nambari= 25;                 
// console.log(nambari == 25);
// console.log(nambari == '25');
console.log(nambari != 25);
console.log(nambari != '25');

                 //STRICT COMPARISON(DIFERENT TYPES CAN NOT BE EQUAL)

console.log(nambari !== 25);
console.log(nambari !== '25');


                 // TYPE CONVERSIONS
let score = '100';

score = Number(score);
console.log(score + 1);
console.log(typeof score);

let matokeo = String('50');
console.log(typeof matokeo);
