/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums=[1,2,3,4,5]
const squared=nums.map(function square(num){
return num*num /* whatever I return from this function will get placed at the exact same index as the original item with whatever kind of modification I make to it */
})
console.log(squared)

/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/
const names=["alice","bob","charlie","danielle"]
const capitalized=names.map(name=>{
    return name[0].toUpperCase() + name.slice(1)/* since we did not provide a second parameter therefore it would go on from the second letter to the very end */

})
console.log(capitalized)

/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
const htmlTags= pokemon.map(mons=>{
    return `<p>${mons}</p>`
})
console.log(htmlTags)