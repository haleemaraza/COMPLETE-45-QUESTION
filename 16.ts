
 // initial list of guest 
  let guEsts= ["Aylin", "Alif",  "Arfa"];


 // invitation message 
for (let guest of guEsts){
  console.log(`Dear ${guest}, let catch dinner together`)
};

 // inform about bigger table 
 console.log("Good news, We found a bigger Dinner table!");

 // add one new  guest in the beginning of  array 
guEsts.unshift("Haya");

 // add one new guest in the end of array
 guEsts.push("Danis");

 // add one new guest to the middle of the array
 let middleIndex_: number = Math.floor(guEsts.length / 2);
 guEsts.splice(middleIndex_, 0, "Eva");



// Print a new set of invitation messages
 for (let guest of guEsts) {
     console.log(`Dear ${guest}, you are invited to Dinner!`)
 };










