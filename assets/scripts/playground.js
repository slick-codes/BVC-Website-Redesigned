
const numbArr = [45,5, 'slick' , 49, 'paul', 45, 45]
let sumOfArr = 0

// write a code to prevent the strings from 
// being evaluated (concatinated)

for( let i = 0 ; i < numbArr.length; i++){
    sumOfArr += numbArr[i]
}

console.log(sumOfArr)