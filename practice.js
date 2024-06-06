
// Complete the function solveMeFirst to compute the sum of two integers-(HackerRank)
let solveMeFirst = (a, b) => {
    return a+b;
}
// Simple Array Sum Solution-(HackerRank)
let simpleArraySum = (ar) => {
    let sum = 0;
    for(let element of ar){
        sum += element;
    }
    return sum;
}
//Compare Triplets solution HackerRank
let compareTriplets = (a, b) => {
    let result = [0,0];
    for(let key in a){
        if(a[key] > b[key])
            result[0]++;
        if(a[key] < b[key])
            result[1]++;
    }
    return result;
}
//In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.
function aVeryBigSum(ar) {
    let sum = 0;
    for(let element of ar){
        sum += element
    }
    return sum;
}
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
let diagonalDifference = (arr) => {
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;
    let len = arr.length;
    for(let i = 0; i < len; i++){
        leftDiagonalSum += arr[i][i];
        rightDiagonalSum += arr[i][len-(i+1)];
    }
    let difference = Math.abs(leftDiagonalSum - rightDiagonalSum);
    return difference;
}
//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.soution-(HackerRank)
let plusMinus = (arr) => {
    let positiveNumbers = 0;
    let negativeNumbers = 0;
    let zeros = 0;
    let len = arr.length;
    for(let key in arr){
        if(arr[key] > 0){
            positiveNumbers++;
        }
        else if(arr[key] < 0){
            negativeNumbers++;
        }
        else{
            zeros++;
        }
    }
    let positiveRatio = (positiveNumbers/len).toFixed(6);
    let negativeRatio = (negativeNumbers/len).toFixed(6);
    let zeroRatio = (zeros/len).toFixed(6);
    console.log(positiveRatio);
    console.log(negativeRatio);
    console.log(zeroRatio);
}

//Staircase challenge solution-(HackerRank)
let staircase = (n) => {
    for(let i = 1; i <= n ; i++){
        let line = '';
        for(let j = 1; j <= n; j++){
            if(j <= n-i){
                line += ' '; 
            }else{
                line += '#';                 
            }
        }
        console.log(line);
    }
}
