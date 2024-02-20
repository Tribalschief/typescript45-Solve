//task 32
let current_users:string[] = ["Ahmed","Taha","Baber","Taimur","Shahiryar"]
let new_users:string[] = ["Muqeet","Hammad","Asif","Baber","Taha"]

for(let new_user of new_users) {
    if(current_users.some(user => user.toLowerCase() === new_user.toLowerCase())){
        console.log(`The user name ${new_user} is not available. please try something new`)
    } else {
        console.log(`The user name ${new_user} is available`)
    }
}