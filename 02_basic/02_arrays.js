 const marval_heros =["thor", "Ironman","spiderman "]
 const dc_heros=["superman","flash","batman"]

 marval_heros.push(dc_heros)
//  console.log(marval_heros);

//  console.log(marval_heros);
//  console.log(marval_heros[3][1]);

 const allheros= marval_heros.concat(dc_heros)
//  console.log(allheros);

const all_new_heros =[...marval_heros,...dc_heros]
// console.log(all_new_heros);

const real_another_array =another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("apoorv"));
console.log(Array.from("apoorv"));
console.log(Array.from( {name:"apoorv"})); // interesting 
 

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));

 