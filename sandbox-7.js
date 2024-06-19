                //Forms and events 


//                 // SUBMIT EVENTS
// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.querySelector('.signup-form');
//     // const username = document.querySelector('#username');

//     form.addEventListener('submit', e => {
//         e.preventDefault();
//         // console.log(username.value);
//     });
//     console.log(form.username.value); //how to get the username from the form using dot notation and the ID
// });


            //HOW TO MAKE SURE THAT THE DATA THE USER INPUTS IS VALID
                //go to regex101.com


                //TESTING REGEX PATTERNS

// const username = '3434shawnnnnnn456789';
// const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username);


// if(result){
//     console.log('regex test is passed :)');
// } else{
//     console.log('regex test failed :(');
// }
// // console.log(result);

// let result = username.search(pattern);
// console.log(result);


                    // VALIDATION

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;
                            
form.addEventListener('submit', e => {
    e.preventDefault();

    //VALIDATION
    const username = form.username.value;
    

    if (usernamePattern.test(username)){
        //feedback good info
        feedback.textContext = 'That username is valid!';
        } else {
            //feedback help info
            feedback.textContent = 'username must contain letters only & be between 6 &12!';
        }
});


                //KEYBOARD EVENTS

//LIVE FEEDBACK
form.username.addEventListener('keyup', e =>{
    //console.log(e.target.value, form.username.value);
    if(usernamePattern.test(e.target.value)){
        form.username.setAttribute('class', 'success');
    } else{
        form.username.setAttribute('class', 'error');
    }
});