                   //querry selection

//const para = document.querySelector('div.error');
//when we use the (p) we get the first paragraph text on the console, but if we want to select the CSS element, replace P with (.error)

//console.log(para);

//How to grab multiple selectors
//const paras =document.querySelectorAll('p');
const errors = document.querySelectorAll('.error');
//1 has grabbed all the (p) tags in the HTML
//2 has grabbed all the error tags from the div and the p tags
console.log(errors);


                    //other ways to querry

// get an element by the ID
const titles = document.getElementById('page-titles') 
console.log(titles);

// get elements by their class name
const error = document.getElementsByClassName('error');
console.log(error);

// get elements by their tag name
//const paras = document.getElementsByTagName('p');
//console.log(paras);
//console.log(paras[1]); //selects the p tag in the number 1 position
// Javascript begins counting arrays from 0!!

                    //Adding or changing page content
const para = document.querySelector('p');
 //the innerText gets the text of the (p) tag
 //console.log(para.innerText); 

 //when you want to replace the text you use the (=), but when you want to append the text you use (+=)
//para.innerText += ('Wewe ni bazenga!!');    
 
 //when you want to change the contents if multiple texts
 //const paras = document.querySelectorAll('p');

//para.forEach(para => {
   // console.log(para.innerText);
   // para.innerText += 'NEW';
// });

//Adding HTML CONTENT
const content = document.querySelector('.content');
//console.log(content.innerHTML);
//content.innerHTML += '<h2> THIS IS NEW <h2>';

const people = ['mario', 'luigi', 'kevo'];

//people.forEach(person=> {
   //content.innerHTML += `<p>${person}</p>`;
//});

            //getting started and setting attributes

const link = document.querySelector('a');
//how to get the attribute
console.log(link.getAttribute('href'));
//how to change the attribute
link.setAttribute('href', 'https://www.youtube.com/watch?v=wyx6JDQCslE');
//link.innerText = 'Party next door';


            //Changing CSS styles
const titlez = document.querySelector('h1');
//This just overwrites the style
//head.setAttribute('style', 'margin:100px;');

//how to add a new style
console.log(titlez.style);
console.log(titlez.style.color);

titlez.style.margin = '50px';
titlez.style.color = 'red';
titlez.style.fontSize = '50px';

titlez.style.color = ''; //this is how to deleta a style reverts the color back to blue


            // adding or removing classes from elements
//const contents = document.querySelector('p');

//console.log(content.classList);
//content.classList.add('WOW');
//content.classList.remove('WOW');
//content.classList.add('content');

            //Parent, children, and siblings

// const article = document.querySelector('article');

// console.log(article.children); //for a html collection
// console.log(Array.from(article.children)); //for an array

//when you want to add classes to the child elements
// Array.from(article.children).forEach( child => {
//    child.classList.add('article-element');
// }); 

// const title = document.querySelector('h2');

// console.log(title.parentElement); //to find the direct parent element
// console.log(title.parentElement.parentElement); //to find the parent of the parent
// console.log(title.nextElementSibling); //find the next sibling in the tree
// console.log(title.previousElementSibling); //firn the previous sibling in the tree

//chaining
//console.log(title.nextElementSibling.parentElement.children); //a longer way of getting all the relations

            //Basic events(click events)

// Add event listener to each list item for initial items
// document.querySelectorAll('li').forEach(item => {
//    item.addEventListener('click', e => {
//        console.log('Item clicked!');
//        console.log(`Clicked item: ${e.target.textContent}`); //displayes which item has been clicked
//        //e.target.remove(); // This removes the clicked list item
//        //console.log('Event in LI');
//        e.stopPropagation(); // Prevents the event from bubbling up
//    });
// });

// // Select the button and the unordered list (ul)
// const button = document.querySelector('button');
// const ul = document.querySelector('ul');

// // Event listener for adding new items to the list
// button.addEventListener('click', () => {
//    ul.innerHTML += '<li class="list">do somtin</li>';
// });

// // Event delegation for handling clicks on list items, even newly added ones
// ul.addEventListener('click', e => {
//    if (e.target.tagName === 'LI') {
//        e.target.remove(); // Removes the clicked list item
//        console.log(`Clicked item: ${e.target.textContent}`); //displayes which item has been clicked
//        //console.log('Event in UL');
//    }
// });


                           // EVERYTHING ALTOGETHER

const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

button.addEventListener('click', () =>{
   popup.style.display = 'block';
} );

close.addEventListener('click', () =>{
   popup.style.display = 'none';
} );

popup.addEventListener('click', () =>{
   popup.style.display = 'none';
} );