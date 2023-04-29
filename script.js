// program to convert decimal to binary
const num = parseInt(prompt('Enter a decimal number: '));
function decimalToBinary(num){
    let binaryStr = ""
    while(num>0){
        let rem = num%2;
        binaryStr = binaryStr + rem.toString()
 
        num = Math.floor(num/2)
    }
    return binaryStr.split("").reverse().join("")
}
module.exports = decimalToBinary;