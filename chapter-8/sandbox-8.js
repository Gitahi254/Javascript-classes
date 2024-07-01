const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result')

form.addEventListener('submit', e =>{
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });

    // console.log(score);
    //SHOW RESULTS ON PAGE

    scrollTo(0,0);  //=> when you press submit, the page automaticaly moves to the top
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() =>{
        result.querySelector('span').textContent = `${output}%`;
        if (output === score){
            clearInterval(timer);    
        } else {
                output++;
        }
        }, 10);
});


            //window object (global object)
        //---->window is the global object ----> meaning the function is stored in the window object

// console.log('hello');
// window.console.log('hello');

// console.log(document.querySelector('form'));
// window.console.log(document.querySelector('form'));

// alert('hello');
// window.alert('hello!');

// setTimeout(() =>{
//     alert('hello ninjas!')
// }, 3000);

                //How to animate the score
// let i = 0;
// const timer = setInterval(() =>{
//     console.log('hello');
//     i ++;
//     if(i === 5){
//         clearInterval(timer);
//     }
// }, 1000);  
        