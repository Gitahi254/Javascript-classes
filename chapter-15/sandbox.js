// const userOne = {
//     username: 'kim',
//     email: 'kimmwas@gmail',
//     login(){
//         console.log('the user has logged in');
//     },
//     logout(){
//         console.log('the user has logged out');
//     }
// };

// console.log(userOne.email, userOne.username);
// userOne.login();

// CONSTRUCTOR FUNCTIONS
function User(username, email){
    this.username = username;
    this.email = email;
    //method
    // this.login = function(){
    //     console.log(`${this.username} has logged in.`);
    // };
}
// prototype
User.prototype.login = function(){
    console.log(`${this.username} has logged in`);
};
User.prototype.logout  = function(){
    console.log(`${this.username} has logged out`);
    return this;
};


function Admin(username, email, title){
    User.call(this, username, email);
    this.title = title;
}

Admin.prototype = Object.create(User.prototype);   //=>Now we have a copy of the user prototype inside the admin prototype.
Admin.prototype.deleteUser = function(){
    // delete a user
};



// CLASS CONSTRUCTORS

// class User{
//     constructor(username, email){
//         // set up the properties.
//         this.username = username;
//         this.email = email;
//         this.score = 0;
//     }
//     login(){
//         console.log(`${this.username} just logged in`);
//         return this;
//     }
//     logout(){
//         console.log(`${this.username} just logged out`);
//         return this;
//     }
//     incScore(){
//         this.score += 1;
//         console.log(`${this.username} has a score of ${this.score}`);
//         return this;
//     }
// }

// find the user class, and extend everything into the admin class
// class Admin extends User{ 
//     constructor(username, email, title){
//         super(username,email)
//         this.title = title;
//     }
//     deleteUser(user){
//         users = users.filter(u => u.username !== user.username);
//         }
// }

const userOne = new User('kim', 'kimanikimanongo@gmail');
const userTwo = new User('luiz', 'luiz@gmail');
const userThree = new Admin('admin', 'admin@gmail.com', 'black-belt-ninja');

console.log(userOne, userTwo, userThree);

let users = [userOne, userTwo, userThree];
console.log(users);

// userThree.deleteUser(userTwo);
// console.log(users);

console.log(userOne, userTwo);
userOne.login();
userOne.logout();



// userOne.login().incScore().logout();   //this is now what we call chaining

            //STEPS.
// THE "new" keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this into the new empty object
// 3 - it calls the constructor function to the 'build' object 


