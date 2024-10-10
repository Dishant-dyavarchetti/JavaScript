// let a = "Dishant"
// function abcd(a){
//     a = "maa chuda";
//     return a
// }

// b = abcd(a);
// console.log(b);


// //modern js
// const arrowSum = (a ,b) => {
//     return a + b;
// };

// console.log(arrowSum(3,4));

// function isVowel(str) {
//     let count = 0;
//     for(let letter of str) {
//         if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
//             count++;
//         }
//     }
//     return count;
// }


const isVowel = (str) => {
    let count = 0;
    for(let letter of str) {
        if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
            count++;
        }
    }
    return count;
}

let str = prompt("Enter the string");
let vowel = isVowel(str);
console.log(`the total vowel in the string ${str} is ${vowel}`);


