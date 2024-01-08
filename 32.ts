// list of current user 
let currentusers :string [] = ["Khadija","Imroz","Hanzala"]

// list of new user
let newusers :string[] =["Haleema","Ayesha","Hamna"]

// new user for uniqueness

for(let newuser of newusers) {

    let lowercaseNewUser = newuser.toLowerCase()
    let isUnique = !currentusers.some((currentuser) => currentuser.toLowerCase()=== lowercaseNewUser)
    if (isUnique){
        console.log(`Username '${newuser}' is avaible`)
    }else{
        console.log(`sorry, the usernsme'${newuser}'is already taken. please enter a new username`)
    }
}