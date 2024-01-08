
// usernames
let username_: string[] = ["Aylin","Arfa","Alif","Haya"]

// check if the list of user si not empty
if (username_.length >0) {
   // greetings
   for (let i = 0; i < username_.length; i++) {
   const username = username_[i];

   if (username === 'Saba') {
     console.log("hi Saba, let;s meet again ");
   } else {
     console.log(`Hello ${username}, let's caught dinner togther`);
   }
  }
}else {
    console.log("long time no see.")
}



// remove all username
username_=[]

// if the list of users is not empty
if (username_.length >0) {
    // greetings
    for (let i = 0; i < username_.length; i++) {
    const username = username_[i];
 
    if (username === 'Saba') {
      console.log("hi Saba, let;s meet again ");
    } else {
      console.log(`Hello ${username_}, let's caught dinner togther`);
    }
   }
 }else {
     console.log("long time no see.")
 }