//  STORE DATA IN LOCAL STORAGE

localStorage.setItem('name', 'kimani');
localStorage.setItem('age', 50);





// GET DATA FROM LOCAL STORAGE

let jina = localStorage.getItem('name');
let miaka = localStorage.getItem('age');

console.log(jina, miaka);




// UPDATE DATA

localStorage.setItem('name', 'gitahi');
localStorage.age = '40';

jina = localStorage.getItem('name');
miaka = localStorage.getItem('age')
console.log(jina, miaka);


// DELETE STORAGE DATA
// localStorage.removeItem('name');   //=>THIS IS TO REMOVE A SINGLE ITEM
localStorage.clear();     //=>THIS IS TO REMOVE ALL THE ITEMS
jina = localStorage.getItem('name');
miaka = localStorage.getItem('age');

console.log(jina, miaka);



//STRINGIFYING AND PARSING DATA
const todos = [
    {text:'feed cats', author: 'kip'},
    {text:'play piano', author: 'wiggy g'},
    {text:'take out trash', author: 'manu'}
];

// console.log(JSON.stringify(todos));
// how to store it in the loacl storage
localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem('todos');
console.log(JSON.parse(stored));