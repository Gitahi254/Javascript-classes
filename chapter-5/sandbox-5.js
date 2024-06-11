    // OBJECT LITTERALS
let user = {
    name:"crystal",
    age: 30,
    email: "crystal@gmail.com",
    location:"Nairobi",
    blogs:["Welcome to Nairobi" , "I am a man"]
};
console.log (user);
console.log(user.name);

// if I wanted to change a variable name later in the code;
user.name = "Wendy"
console.log(user.name);
console.log(user);

// getting items using BOX notation
console.log(user["email"]);
user['email'] = "wendy@yahoo.com";
console.log(user["email"]);

console.log(user);

// using TYPEOFF notation to see what you have
console.log(typeof user);
// the result on the console will be OBJECT because tumeandika objects uko juu

    // ADDING METHODS
let bro = {
    name:"crystal",
    age: 30,
    email: "crystal@gmail.com",
    location:"Nairobi",
    blogs:["Welcome to Nairobi" , "I am a man"],
    // the following are examples of methods
    login: function(){
        console.log('this bro had logged in!');
    },
    logout: function(){
        console.log("The bro has left mehn");
    },
    logBlogs: function(){

    }
};

bro.login();


