console.log(1);
console.log(2);

setTimeout(() =>{
    console.log('callback function fired');
}, 2000);

console.log(3);
console.log(4);

// const getTodos = (resource) => {

//     return new Promise((resolve, reject) =>{
//         const request = new XMLHttpRequest();
  
//         request.addEventListener('readystatechange', () => {
      
//           if(request.readyState === 4 && request.status === 200){
//             const data = JSON.parse(request.responseText);
//             resolve(data)
//           } else if (request.readyState === 4){
//             reject('error getting resource');
//           }
//         });
        
//         request.open('GET', resource);
//         request.send();
      
//     });
// };

// // promise chaining
// getTodos('todos/kuku.json').then(data =>{
//     console.log('promise 1 resolved:', data);
//     return getTodos('todos/morasta.json');
// }).then(data =>{
//     console.log('promise 2 resolved:', data);
//     return getTodos('todos/bazuu.json');
// }).then(data =>{
//     console.log('promise 3 resolved:', data);
// }).catch(err =>{
//     console.log('promise rejected:', err);
// });

   
  
//   getTodos('todos/morasta.json', (err, data) => {
//     console.log(data);
//     getTodos('todos/bazuu.json', (err, data) =>{
//         console.log(data);
//         getTodos('todos/kuku.json', (err, data) =>{
//             console.log(data);
//         })
//     })  
//   });

        //PROMISE EXAMPLE

const getSomething = () => {
    return new Promise((resolve, reject) => {
        //fetch something
        resolve('some data');
        //reject('other data');
    });
};

// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });

getSomething().then(data =>{
    console.log(data);
}).catch(err =>{
    console.log(err);
})


            // fetch api

// fetch('todos/bazuu.json').then((response) =>{
//     console.log('resolved', response);
//     return response.json();
// }).then(data =>{
//     console.log(data);
// }).catch((err) =>{
//     console.log('rejected', err);
// });

            // ASYNC AND WAIT
            // Throwing and catching errors

const getTodos = async() => {

    const response = await fetch ('todos/kukue.json')
    if (response.status !== 200){
        throw new Error('cannot fetch data');
    }
    const data = await response.json();
    return data;
};

getTodos()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected:', err.message));



