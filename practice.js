
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