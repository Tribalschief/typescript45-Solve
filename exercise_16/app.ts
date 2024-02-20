//task 17
let guest_list : string[] = ["Ahmed", "Khan", "Muqeet", "Burki"]
    for(let i = 0; i < guest_list.length; i++){
        console.log(`Dear ${guest_list[i]}, I would like to invite you to dinner`)
    }
    let a : number = Math.round(Math.random() * (guest_list.length - 1))
        console.log(`${guest_list[a]} can't make it`)
        guest_list.splice(a, a, "Rehmat")
        console.log(`Dear ${guest_list[a]}, I would like to invite you to dinner`)
        console.log("I have found bigger table")
        guest_list.unshift("Amir")
        guest_list.splice(3, 0, "Baber")
        guest_list.push("Abdullah")
        console.log(guest_list)
        for(let i = 0; i < guest_list.length; i++){
            console.log(`Dear ${guest_list[i]}, I would like to invite you to dinner`)
        }
        console.log("I can invite only two people for dinner")
        console.log(guest_list.length)

        while (guest_list.length > 2) {
        let removed_guest:string | undefined= guest_list.pop()
        if(removed_guest){
            console.log(`Sorry, ${removed_guest}, I can't invite you to dinner.`);
        }
    }
    console.log("The final two guests are:", guest_list);
       for(let i=0;i<guest_list.length;i++){
           console.log(`Dear ${guest_list[i]}, you are still invited`)
       }
       guest_list.pop()
       guest_list.pop()
       console.log(' we have following guests in list :',guest_list) 