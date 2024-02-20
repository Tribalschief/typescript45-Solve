//task 42
function make_great(magicians: string[]):string[]{
    return magicians.map(magician => `The Great ${magician}`)
 }
 function show_magicians(magicians: string[]):void{
     for(let magician of magicians){
      console.log(magician)
     }
  }
 
  let magi: string[] = ["Merlin the Magnificent","Mystique the Enchanter","Zephyr the Illusionist","Celestia the Sorceress"    ,"Thaddeus the Wizard"]
  const making_great = make_great(magi)
  show_magicians(making_great)
 