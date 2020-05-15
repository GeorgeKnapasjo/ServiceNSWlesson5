let sentence = "The quick brown fox jumps over the lazy dog.";

//1. Write function that searches for a string inside the sentence above. The function should return true if the string is found or false otherwise
// function findFox(sentence){
//     return sentence.includes("jeff")
// }

// console.log(findFox(sentence))

//2. Write function that searches for a string inside the sentence above. The function should return the index of the first occurrence of the string if the string is found or -1 otherwise.

// function findWord (searchTerm){
//     return sentence.indexOf(searchTerm)
// }
// let wordFound = findWord("dog")
// console.log(wordFound)

//3 Write a function that takes a string and returns the first three characters of that string.
// function first3Characters(sentence){
//     return sentence.substring(0, 3)
// }
// let foundFirstCharacters = first3Characters(sentence)
// console.log(foundFirstCharacters)

//4 Write a function that takes a string and returns the last two characters of that string.
// function last2Characters(sentence){
//     return sentence.substring(sentence.length-2, sentence.length)
// }
// let foundLast2Characters =  last2Characters(sentence);
// console.log(foundLast2Characters)

//5 Write a function that converts a string into an array of words where a word is any string separated by a space.
// function arrayMaker(setence){
//     return setence.split(" ")
// }
// let arrayMade = arrayMaker(sentence);
// console.log(arrayMade);

//6 Write a function that counts the number of times a string appears inside the sentence string above.

function countWord(searchString, searchWord) {
    let count = 0
    let indexNumber = 0
    while (true) {
        let indexOfSearchWord = searchString.indexOf(searchWord, indexNumber)
        if (indexOfSearchWord == -1) {
            break;
        }
        count++
        indexNumber = indexOfSearchWord + 1
    }
    return count;
}
let wordCounted = countWord(sentence, "e");
console.log(wordCounted)
