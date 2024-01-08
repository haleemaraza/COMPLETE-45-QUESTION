"use strict";
// usernames
const usernames = ["Aylin", "Arfa", "Alif", "Haya"];
// greetings
for (let i = 0; i < usernames.length; i++) {
    const username = usernames[i];
    if (username === 'Saba') {
        console.log("hi Saba, let;s meet again ");
    }
    else {
        console.log(`Hello ${username}, let's caught dinner togther`);
    }
}
