
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
//Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
let miniMaxSum = (arr) => {
    let len = arr.length;
    let removeIndex = 0;
    let sumArray = [];
    //set sum of all the four of five elements in array
    for(let i = 0; i < len; i++){
        let sum = 0;
        for(let j = 0 ; j < len ; j++){
            if(i != j){
                sum += arr[j];
            }
        }
        sumArray[i] = sum;
    }
    // get maximum and minimum sum
    let maxSum = 0;
    let minSum = 0;
    for(let i = 0; i < len; i++){
        if(sumArray[i] > maxSum){
            maxSum = sumArray[i];
        }
        if(sumArray[i] < minSum || minSum == 0){
            minSum = sumArray[i];
        }
    }
    console.log(minSum+' '+maxSum);
}
//You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.
let birthdayCakeCandles = (candles) => {
    let len = candles.length;
    let tallest = 0;
    let count = 0;
    for(let key in candles){
        if(candles[key] > tallest){
            tallest = candles[key];
            count = 0;
        }
        if(candles[key] == tallest){
            count++;
        }
    }
    return count;    
}

//Given a time in -hour AM/PM format, convert it to military (24-hour) time.
function timeConversion(s) {
    let time = '';
    let len = s.length
    let mode = s[len-2]+s[len-1];
    let oldTime = parseInt(s[0]+s[1]);
    if(mode == 'AM' && oldTime == 12){
        time = `00:${s[3]+s[4]}:${s[6]+s[7]}`;
    }else if(mode == 'PM' && oldTime != 12){
        let newTime = String(oldTime+12);
        time = `${newTime[0]+newTime[1]}:${s[3]+s[4]}:${s[6]+s[7]}`;
    }else{
        time = `${s[0]+s[1]}:${s[3]+s[4]}:${s[6]+s[7]}`;
    }
    return time;
}

// Grading Students
let gradingStudents = (grades) => {
    let newGrades = [];
    for (let key in grades){
        if((grades[key]+1)%5 == 0 && grades[key] >= 38){
            newGrades[key] = grades[key]+1;
        }
        else if((grades[key]+2)%5 == 0 && grades[key] >= 38){
            newGrades[key] = grades[key]+2;
        }
        else{
            newGrades[key] = grades[key];
        }
    }
    return newGrades;
}