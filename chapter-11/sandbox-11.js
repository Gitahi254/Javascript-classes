///dates and time
// const now = new Date();

// console.log(now);
// console.log(typeof now);

// ///years, days months , time
// console.log('getFullYear:', now.getFullYear());
// console.log('getMonth:', now.getMonth());
// console.log('getDate:', now.getDate());
// console.log('getDay:', now.getDay());
// console.log('getHours:', now.getHours());
// console.log('getMinutes:', now.getMinutes());
// console.log('getSeconds:', now.getSeconds());


// ///TIMESTAMP
// console.log('timestamp:', now.getTime());

// //DATE STRINGS
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());


            ///TIMESTAMPS
// const before = new Date();
//const now = new Date();

//console.log(now.getTime(), before.getTime());

//const diff = now.getTime() - before.getTime();
//console.log(diff);


//const mins = Math.round(diff / 1000 / 60);
// const hours = Math.round(mins / 60);
// const days = Math.round(hours/ 24);

// console.log(`The blog was written ${days} days ago`);

// ///CONVERTING TIMESTAMPS TO DATE OBJECTS
// const timestamp = 1675938474990;
// console.log(new Date(timestamp));



            //DATE FNS
const now = new Date();

// console.log(dateFns.isToday(now));

        //formatting options
console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMMM'));
console.log(dateFns.format(now, 'dddd'));
console.log(dateFns.format(now, 'Do'));
console.log(dateFns.format(now, 'dddd Do MMMM YYYY'));


//COMPARING DATES
const before = new Date('February 9 2024 10:10:00')

console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));

