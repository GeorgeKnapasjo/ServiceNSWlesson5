//1 Write a function that determines if a string contains a valid email address
//  let sentence = "My email address is george.knapasjo@service.nsw.gov.au"
//  const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;

// let containsEmail = EMAIL_REGEX.test(sentence)
// console.log(containsEmail)
// function testValidity(sentence){
//     return EMAIL_REGEX.test(sentence)
// }
// let validEmail = testValidity(sentence);
// console.log(validEmail)

//2 Write a function to find the index of the first character of a valid URL

let sentence = "george"
const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;



// // console.log(isValidURL)

function validURL(sentence) {
    let isValidURL = URL_REGEX.test(sentence)
    if (isValidURL == true) {
        return sentence.indexOf(sentence)
    } else {return "invalid URL" }
}
let validURLFound = validURL(sentence)
console.log(validURLFound)
