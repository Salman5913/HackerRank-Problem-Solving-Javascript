// Complete the function solveMeFirst to compute the sum of two integers.
let solveMeFirst = (a, b) => {
    return a+b;
}
// Simple Array Sum-(HackerRank)
let simpleArraySum = (ar) => {
    let sum = 0;
    for(let element of ar){
        sum += element;
    }
    return sum;
}
//Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.
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
//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
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

//Staircase challenge
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

//Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.
let countApplesAndOranges = (s, t, a, b, apples, oranges) => {
    let appleCount = 0;
    let orangeCount = 0
    for(let key in apples){
        apples[key] += a;
        if(apples[key] >= s && apples[key] <= t){
            appleCount++;
        }
    }
    for(let key in oranges){
        oranges[key] += b;
        if(oranges[key] >= s && oranges[key] <= t){
            orangeCount++;
        }
    }
    console.log(appleCount);
    console.log(orangeCount);
}
// You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).
let kangaroo = (x1, v1, x2, v2) => {
    while (true) {
        x1 += v1;
        x2 += v2;
        if (x1 === x2) {
            return 'YES';
        } else if ((x1 < x2 && v1 <= v2) || (x1 > x2 && v1 >= v2)) {
            return 'NO'; 
        }
    }
}

// There is a sequence of words in CamelCase as a string of letters, , having the following properties:

// It is a concatenation of one or more words consisting of English letters.
// All letters in the first word are lowercase.
// For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
// Given , determine the number of words in .
let camelcase = (s) => {
    let count = 1;
    for(let i = 0;i < s.length;i++){
        if(s[i] == s[i].toUpperCase()){
            count++;
        }
    }
    return count;
}

// There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. Determine how many such numbers exist.
let getTotalX = (a, b) => {
    let count = 0;
    let num = 1;
    while(num <= 100){
    let isAFactor = true;
    let isNumFactor = true;
        for(let ele of a){
            if(num%ele != 0){
                isAFactor = false;
                break;
            }
        }
        for(let ele of b){
            if(ele%num != 0){
                isNumFactor = false;
                break;
            }
        }
        if(isAFactor && isNumFactor){
            count++;
        }
        num++;
    }
    return count;
}

// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.
let breakingRecords = (scores) => {
    let highestCount = 0;
    let lowestCount = 0;
    let highScore = scores[0];
    let lowScore = scores[0];
    for(let key in scores){
        if(scores[key] > highScore){
            highestCount++;
            highScore = scores[key]
        }
        if(scores[key] < lowScore){
            lowestCount++;
            lowScore = scores[key];
        }
    }
    return [highestCount,lowestCount];
}

// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

// Lily decides to share a contiguous segment of the bar selected such that:

// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.
let birthday = (s, d, m) => {
    let count = 0;
    for(let key in s){
        key = parseInt(key);
        let sum = 0
        for(let i = key; i < (key+m) ; i++){
            sum += s[i];
        }
        if(sum == d){
            count++;
        }
    }
    return count;
}

// /Given an array of integers and a positive integer , determine the number of (i,j) pairs where (i<j) and ar[i]+ar[j] is divisible by k.(HackerRank)
let divisibleSumPairs = (n, k, ar) => {
    let count = 0;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n;j++){
            let isDivisible = false;
            if(i != j && i < j){
                isDivisible = (ar[i] + ar[j])%k == 0;
                if(isDivisible){
                    count++;
                }
            }
        }
    }
    return count;
}

// Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.(HackerRank)
let migratoryBirds = (arr) => {
    let sightings = {};
    //set number of sightings in sightings object with their ids
    for(let key in arr){
        if(!(arr[key] in sightings)){
            let sights = 0;
            sights =  arr.filter(item => item === arr[key]).length;
            sightings[arr[key]] = sights; 
        }
    }
    let maxSight = 0
    let maxSightId = 0;
    //calculate maximum number of sights from sightings object
    for(let key in sightings){
        if(sightings[key] > maxSight){
            maxSightId = key;
            maxSight = sightings[key];
        }else if(sightings[key] == maxSight){
            maxSightId = maxSightId > key ? key : maxSightId;
        }
    }
    return maxSightId;
}
//Day of The Programmer-HackerRank
let dayOfProgrammer = (year) => {
    if(year < 1700 || year > 2700){
        return ;
    }
    let isLeap = year > 1918 ? (year%400==0) || (year%4 == 0 && year%100 != 0) : year%4 == 0;
    let daysCount = 0;
    //counting days upto 8 momths because days of 9 months > 256
    for(let i = 1; i <= 8;i++){
        if(i%2 == 0 && i < 8){
            if(i==2){
                daysCount += isLeap ? 29 : 28;
            }else{
            daysCount+= 30;
            }
        }else{
            daysCount += 31;
        }
    }
    //russian calender changed in 1918 to Georgian calender with the differ of 13 days
    daysCount = year == 1918 ? daysCount-=13 : daysCount;
    let day = 256-daysCount;
    return `${day}.09.${year}`;
}

//Bill Division (HackerRank)
let bonAppetit = (bill, k, b) => {
    let sum = 0;
    for(let i=0 ; i < bill.length; i++){
        if(bill[i] != bill[k]){
            sum += bill[i];
        }
    }
    let split = sum/2;
    if(split == b){
        console.log('Bon Appetit')
    }else{
        console.log(b-split);
    }
}

//Sales By Match  (HackerRank)
let sockMerchant = (n, ar) => {
    let pairCount = 0;
    let countedPair = [];
    for(let i = 0; i < n;i++){
        let pairs = 0;
        let isCounted = true;
        countedPair[i] = ar[i];
        //check for counted pair
        for(let key in countedPair){
            key = parseInt(key);
            if(key != i && countedPair[key] == ar[i]){
                isCounted = false;
            }
        }
        //if pair is already not counted
        if(isCounted){
            for(let j = 0; j < n;j++){
                if(ar[i] == ar[j]){
                    pairs++;
                }
            }
            if(pairs > 1){
                pairCount += (pairs%2 == 0) ? pairs/2 : (pairs-1)/2;
            }
        }
    }
    return pairCount;
}

//Drwaing Book
let pageCount = (n, p) => {
    let countStart = 0
    let countEnd = 0
    let startPage = 1;
    let endPage = n;
    for(let i = 1; i <= n ; i++){
        if(startPage < p){
            countStart++;
        }
        startPage+=2;
    }
    for(let i = n; i >= 1 ; i--){
        n%2 == 0 && n-p == 1 ? endPage-=1 : endPage-=2;
        if(endPage >= p){
            countEnd++;
        }
    }
    return countStart < countEnd ? countStart : countEnd;
}

//Counting Valleys
let countingValleys = (steps, path) => {
    let count = 0;
    let altitude = 0;
    for(let i = 0 ; i < path.length ; i++){
        if(path[i] === 'U'){
            altitude++;
            if(altitude === 0){
                count++;
            }
        }
        else{
            altitude--;
        }
    }
    return count;
}

//Electronics Shop 
let getMoneySpent = (keyboards, drives, b) => {
    let sum = 0 ;
    let expensiveOption = 0;
    for(let i =0 ; i < keyboards.length ; i++){
        for(let j = 0 ; j < drives.length ; j++){
            sum  = keyboards[i] + drives[j];
            if(sum <= b && sum > expensiveOption){
                expensiveOption = sum;
            }
        }
    }
    return expensiveOption == 0 ? -1 : expensiveOption;
}

//Cats and a Mouse-(HackerRank)
let catAndMouse = (x, y, z) => {
    let xDistance =  x > z ? x-z : z-x;
    let yDistance =  y > z ? y-z : z-y;
    return xDistance < yDistance ? 'Cat A' : xDistance > yDistance ? 'Cat B' : 'Mouse C';
}
//Picking Numbers-(HackerRank)
let pickingNumbers = (a) => {
    let max = 0;
    for (let i = 0; i < a.length; i++) {
        let count = 0;
        for (let j = 0; j < a.length; j++) {
            if (a[j] == a[i] || a[j] == a[i] + 1) {
                count++;
            }
        }
        if (count > max) {
            max = count;
        }
    }
    return max;
}
//The Hurdle Race-(HackerRank)
let hurdleRace = (k, height) => {
    let maxHurdle = 0;
    for(let i = 0; i < height.length; i++){
        if(height[i] > maxHurdle && height[i] > k){
            maxHurdle = height[i];
        }
    }
    return maxHurdle <= 0 ? maxHurdle : maxHurdle-k;
}

// Designer PDF Viewer
let designerPdfViewer = (h, word) => {
    let alphabets = 'abcdefghijklmnopqrstuvwxyz';
    let maxHeight = 0;
    for(let key in alphabets){
        for(let i in word){
            if(alphabets[key] == word[i] && h[key] > maxHeight){
                maxHeight = h[key]
            }
        }
    }
    return maxHeight*word.length;
}

//Utopian Tree-(HackerRank)
let utopianTree = (n) => {
    let height = 1;
    for(let i = 1 ; i <= n ; i++){
        if(i%2 == 0){
            height++;
        } else{
            height = height*2;
        }
    }
    return height;
}

//Angry Professor Solution-(HackerRank)
let angryProfessor = (k, a) => {
    let onTimeCount = 0;
    for(let key in a){
        if(a[key] <= 0){
            onTimeCount++
        }
    }
    return onTimeCount >= k ? 'NO' : 'YES';
}

//Beautiful days at movies Solution-(HackerRank)
let beautifulDays = (i, j, k) => {
    let beautifullDays = 0;
    for(let a = i ; a <= j ;a++){
        let b = a.toString();
        let reverse = '';
        for(let c = b.length-1 ; c >= 0; c--){
            reverse += b[c];
        }
        reverse =  parseInt(reverse)
        let diff = reverse > a ? reverse-a : -(reverse-a);
        let isBeautifull = diff%k == 0; 
        if(isBeautifull){
            beautifullDays++;
        }
    }
    return beautifullDays;
}

//Viral advertising solution-(HackerRank)
let viralAdvertising = (n) => {
    let totalPeople = 5;
    let totalLiked = 0;
    for(let i = 1; i <= n; i++){
        totalLiked += Math.floor(totalPeople/2);
        totalPeople = Math.floor(totalPeople/2)*3;
    }
    return totalLiked;
}

//Save the prioner-(HackerRank)
let saveThePrisoner = (n, m, s) => {
    //s-1 to include the start position prisoner and m-1 to exclude the last prisoner for maintaining the number of candies
     return ((m - 1 + s - 1) % n) + 1;
}

//Extra Long Factorials
let extraLongFactorials = (n) => {
    let factorial = 1n;
    for(let i = 1; i <= n; i++){
        factorial *= BigInt(i)
    }
    console.log(factorial.toString());
}
//Append and Delete Solution - (HackerRank)
function appendAndDelete(s, t, k) {
    let commonLength = 0;

    for (let i = 0; i < Math.min(s.length, t.length); i++) {
        if (s[i] !== t[i]) break;
        commonLength++;
    }

    let totalOperations = s.length - commonLength + t.length - commonLength;

    if (totalOperations > k) return "No";

    if ((k - totalOperations) % 2 === 0 || k >= s.length + t.length) return "Yes";

    return "No";
}

//Library Fine Solution - (HackerRank)
let libraryFine = (d1, m1, y1, d2, m2, y2) => {
    if(d1 > d2 && m1 == m2 && y1 == y2){
        return (d1-d2)*15;
    }else if (m1 > m2 && y1 == y2){
        return (m1-m2)*500;
    }else if(y1 > y2){
        return 10000
    }else{
        return 0
    }
}

//Strong Password Solution-(HackerRank)
function minimumNumber(n, password) {
    let hasDigit = false;
    let hasUpper = false;
    let hasLower = false;
    let hasSpecial = false;
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let digits = "0123456789";
    let specialChars = "!@#$%^&*()-+";
    for(let i =0 ; i < password.length ; i++){
        if(!hasLower){
         for(let j = 0; j < lowerCase.length ;j++){
             if(password[i] == lowerCase[j]){
                 hasLower = true;
                 break;
             }
         }
        }
        if(!hasUpper){
         for(let k = 0; k < upperCase.length ;k++){
             if(password[i] == upperCase[k]){
                 hasUpper = true;
                 break;
             }
         }
        }
        if(!hasDigit){
         for(let l = 0; l < digits.length ;l++){
             if(password[i] == digits[l]){
                 hasDigit = true;
                 break;
             }
         }
        }
        if(!hasSpecial){
         for(let m = 0 ; m < specialChars.length; m++){
             if(password[i] == specialChars[m]){
                 hasSpecial = true ;
                 break;
             }
         }
        }
    }
    let validatorArray = [hasUpper,hasLower,hasDigit,hasSpecial]
    let charsToAdd = 0
    let diff = 0;
    if(n < 6){
     diff = 6-n; 
    }
    for(let key in validatorArray){
        if(!validatorArray[key]){
            charsToAdd++;
        }
    }
    return diff>charsToAdd ? diff : charsToAdd;
 }

 //Repeated String 

let repeatedString = (s, n) => {
    //count a in s
    let countA = s.split('').reduce((count,char) => char==='a' ? count + 1 : count,0); 
    let stringReps = Math.floor(n/s.length);
    //multiply a's with number of string repititions
    countA *= stringReps;
    //get remaining string characters in total repititions 
    let remainingChars = n%s.length;
    //count a in remaining charactaers
    for(let i =0 ;i<remainingChars ; i++){
        if(s[i]==='a'){
            countA++;
        }
    }
    return countA;
}

//Jumping on the clouds solution-(HackerRank)
let jumpingOnClouds = (c) => {
    let pathArr = [];
    for(let i = 0 ; i<c.length ; i++){
        if(c[i+2] != 1 && (i+2) < c.length){
            pathArr.push(i+2);
            i++
        }else if(c[i+1] != 1 && (i+1) < c.length){
            pathArr.push(i+1)
        }
    }
    return pathArr.length;
}

//Equalize the array solution-(HackerRank)
let equalizeArray = (arr) => {
    let maxCount = 0;
    let countedEle = 0;
    for(let i = 0 ; i< arr.length ; i++){
        let count = 0;
     for(let j = 0 ; j< arr.length ; j++){
         if(arr[i] == arr[j]){
             count++;
         }
         if(count > maxCount){
             maxCount = count;
             countedEle = arr[i]
         }
     }   
    }
    let deletions = 0;
    for(let key in arr){
        if(arr[key] != countedEle){
            deletions++;
        }
    }
    return deletions;
}

//Mars Exploration solution -(HackerRank)
let marsExploration = (s) => {
    let count = 0;
    for(let i = 0; i< s.length ; i+=3){
        if(s[i] !== 'S'){
            count++;
        }
        if(s[i+1] !== 'O' && i+1 < s.length){ 
            count++;
        }
        if(s[i+2] !== 'S' && i+2 < s.length){
            count++
        }
    }
    return count;
}

//HackerRank in a String solution -(HackerRank)
function hackerrankInString(s) {
    let hr = 'hackerrank';
    let i = 0 ; //increment s
    let j  = 0 ;//increment hr
    let count = 0;
    while(j < s.length){
        if(s[j] == hr[i]){
            i++;
            count++;
        }
        j++;
    }
    return count == hr.length ? 'YES' : 'NO'
  }

  //Super Reduced String 
  let superReducedString = (s) => {
    let str = s;
    let i = 0;
    while(i < str.length-1){
        if(str[i] == str[i+1] ){
            str = str.substring(0,i) + str.substring(i+2);
            i = 0;
        }
        else{
            i++;
        }
    }
    return str.length == 0 ?'Empty String' : str;
}

//Pangrams solution-(HackerRank)
let pangrams = (s) => {
    let str = s.toLowerCase();
    let alphabets = 'abcdefghijklmnopqrstuvwxyz';
    let i = 0; // str iteration 
    let j = 0// alphabets iteration
    let count = 0;
    while(i < str.length){
        let isEqual  = false;
        if(alphabets[j] === str[i]){
            j++;
            count++
            isEqual = true;
        }
        isEqual ? i=0 : i++;
    }
    return count == alphabets.length ? 'pangram' : 'not pangram';
}

//Service lane solution -(HackerRank)
function serviceLane(n, cases,width) { 
    let i = 0;
    let result = [];
    while (i < cases.length){
        let minWidth = 0;
        for(let j = cases[i][0] ; j <= cases[i][1] ; j++){
            if(width[j] < minWidth || minWidth == 0){
                minWidth = width[j];
            }
        }
        result.push(minWidth);
        i++
    }
    return result
}

//encryption
let encryption = (s) => {
    s = s.split(' ').join('')
    let rows = Math.floor(Math.sqrt(s.length));
    let columns = Math.ceil(Math.sqrt(s.length));
    let strArr = []
    let j = 0; //iteration for inner loop
    if(rows*columns < s.length){
        rows++
    }
    for(let i = 0; i < rows ; i++){
        let row = []
        let iteration = j+columns;
        while(j < iteration && j< s.length){
                row.push(s[j])
                j++
        }
        strArr.push(row);
    }
    let encodedMessage = ''
    let i = 0; //strArr iteration
    //encoding string
    while(i < columns){
      for (let j = 0; j < rows; j++) {
            if (strArr[j][i]) {
                encodedMessage += strArr[j][i];
            }
        }
        // Add a space after each column
        encodedMessage += ' ';
       i++
    }
    return encodedMessage
}

//Pairs Solution-(HackerRank)

let pairs = (k, arr) => {
    let count = 0;
    for(let i = 0; i<arr.length ; i++){
        if(arr.includes(arr[i]+k)){//calculate difference of k
                count++;
        }
    }
    return count
}

//Lonely Integer solution -(HackerRank)
let lonelyinteger = (a) => {
    let ele = 0;
    for(let i = 0; i < a.length ; i++){
        let count = 0
        a.forEach((item) => {
            if(item == a[i]){
                count++
            }
        })
        if(count == 1){
            ele = a[i]
        }
    }
    return ele;
}
//Maximizing XOR solution-(HackerRank)
let maximizingXor = (l, r) => {
    let maxXor = 0
   for(let i = l ; i <= r ; i++){
        for(let j = l ; j <= r ; j++){
            if((i ^ j) > maxXor){
                maxXor = (i ^ j);
            }
        }    
   }
   return maxXor
}

//Intro to tutorial challenges solution-(HackerRank)
let introTutorial = (V, arr) => {
    let ind = 0;
    for(let key in arr){
        if(arr[key] === V ){
            ind = key;
            break;
        }
    }
    return ind;
}
//Halloween Sale -solution(HackerRank)
let howManyGames = (p, d, m, s) => {
    let sum = 0;
    let start = p
    let count = 0;
    while(sum < s){
        sum += start > m ? start : m; 
        start-=d
        if(sum <= s){
            count++
        }
    }
    return count
}

//CHocolate feast solution -(HackerRank)
function chocolateFeast(n, c, m) {
    let chocolates = Math.floor(n / c);
    let wrappers = chocolates;
    
    while (wrappers >= m) {
        let freeChocolates = Math.floor(wrappers / m);
        chocolates += freeChocolates;
        wrappers = freeChocolates + (wrappers % m);
    }
    
    return chocolates;
}
// Lisa's Wrokbook solution -(HackerRank)
function workbook(n, k, arr) {
    let page = 0;
    let count = 0;
    for(let i = 0; i < n; i++) {
        page++;
        for(let j = 1; j <= arr[i]; j++) {
            if(j === page) {
                count++;
            }
            //j !== arr[i] ensure not reach the last problem , so that page cannot be incremented in inner loop in last
            if(j % k === 0 && j !== arr[i]) {
                page++;
            }
        }
    }
    return count;
}

//Fair Rations solution-(HAckeRank)
function fairRations(B) {
    let ar = B
    let count = 0
    for(let key in ar){
        key = parseInt(key)
        if(ar[key] % 2 != 0){
            ar[key]++
            if(ar[key+1]){
                ar[key+1]++
            }else{
                ar[key-1]++
            }
            count+=2
        }
    }
    let isEvenArr = true
    for(let val of ar){
        if(val % 2 != 0){
            isEvenArr = false
        }
    }
    return B.length < 3 || !isEvenArr ? 'NO' : count
}
//Cavity map solution -(HackerRank)
function cavityMap(grid) {
    let matrix = []
    for(let i = 0 ; i < grid.length ; i++){
        let str = grid[i]
        for(let j = 0; j < grid[i].length ; j++){
            //check if element is not on the edge or border
            if(grid[i+1] && grid[i-1] && grid[i][j+1] && grid[i][j-1]){
                //check if element is greater than its adjacent elements
                if((grid[i][j+1] < grid[i][j]) && (grid[i][j-1] < grid[i][j]) && (grid[i+1][j] < grid[i][j]) && (grid[i-1][j] <grid[i][j])){
                   str = str.slice(0,j) + 'X' + str.slice(j+1)
                }
            }
        }
        matrix.push(str)
    }
    return matrix
}

//sequence equation
function permutationEquation(p) {
    let yArr = []
    for (let i = 0 ; i < p.length ; i++){
        let x = i+1
        let ind = p.indexOf(x)
        let y = p.indexOf(ind+1)
        yArr.push(y+1)
    }
    return yArr
}

