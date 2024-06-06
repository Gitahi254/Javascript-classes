        // FOR LOOPS

for(let i = 0; i < 5; i++){
    console.log('in loop:', i);
}
console.log('loop finished');


const names =  ['Gitahi', 'Maina', 'Njengo'];

for(let i = 0;i < names.length; i ++){
    // console.log(names[i]);
    let html = `<div>${names[i]}</div>`
    console.log(html);
}


        // WHILE LOOP


const towns =  ['Nyeri', 'Kikuyu', 'Thika'];

let i = 0;
while(i < 5){
    console.log('in loop:' , i);
    i++;
}

let j = 0;
while(j< names.length){
    console.log(names[j]);
    j++
}


        // DO WHILE LOOPS

let k = 3;
do{
    console.log('val of k is: ', k);
    k++
} while(k < 6);

        // IF STATEMENTS

const castle = 20;

if(castle >20){
    console.log('The tour is a success');
}

const members = ['Daisy','Adams', 'Gitau'];

if (members.length > 3){
    console.log('Those are  some of the members of the trip');
}


const pass = 'pass';

if(pass.length >= 8){
    console.log('Password is not strong!');
}


        // ELSE IF STATEMENTS

const password = 'p@ss';

if(password.length >= 12){
    console.log('That password is mighty.');
}
if(password.length >= 8){
    console.log('Password is not strong!');
} else{
    console.log('Password is not long enough!!');
}

        // LOGICAL OPERATORS - OR || and AND &&

const door = 'p@ss';

if(door.length >= 12 && door.includes('@' )){
    console.log('That password is mighty.');
}
if(door.length >= 8){
    console.log('Password is not strong!');
} else{
    console.log('Password is not long enough!!');
}

        //LOGICAL NOT(!) 

let user = false;

if(!user){
    console.log('You must be logged on to continue.')
}
console.log(!true);
console.log(!false);

        // BREAK AND CONTINUE

const scores = [10, 0, 80, 40, 100, 60];

for(let i = 0; i < scores.length; i++){

    if (scores [i] === 0){
        continue;
    }

    console.log('your score: ', scores[i]);

    if (scores [i] === 100){
        console.log('Congrats you are the top scorer!');
        break
    }

}


        // SWITCH STATEMENTS

const grade = 'B';

switch(grade){
    case'A':
        console.log('You got an A.')
        break;
    case'B':
        console.log('You got an B.')
        break;
    case'C':
        console.log('You got an C.')
        break;
    case'D':
        console.log('You got an D.')
        break;
    case'E':
        console.log('You got an E.')
        break;
    default:
        console.log('Not a valid grade!')
}
//switch statements use strict equalities, kama ni string ni io kila mahali kama ni inteher ni integer
// This is similar to else if statements

//refer below  --->>

// USING IF STATEMENTS

// if (grade == 'A'){

// }else if(grade === 'B'){

// }else if(grade === 'C'){

// }else if(grade === 'D'){

// }else if(grade === 'E'){

// }else{

// }


        //VARIABLES & BLOCK SCOPE

let number = 30;



if(true){
    let number = 40;
    let girl = 'Kimani'
    console.log('Inside code 1st code block: ', number, girl);

    if(true){
        let number = 80;
        console.log('Inside 2nd code block: ' ,number);
    }

}
console.log('Outside code block: ', number);
// const and let can be used interchangibly here but once you use const you can not define the value again
//var can not be used in a block scope

