
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