//task 31
const usernames: string[] = ["Ahmed","admin","Taha","Baber","Taimur"]
for(let i = usernames.length ; i >0 ; i--) {
    usernames.pop()
}
if(usernames.length > 0){
for(let username of usernames){
   if(username == "admin"){
    console.log("Hello admin, would you like to see a status report?")
   } else {
    console.log(`Hello ${username}, thank you for logging in again.`)
   }
}
} else {
    console.log("We need to find some users")
}