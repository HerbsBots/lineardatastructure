
//// solution 1

//// >>> using array method


const proxy1 = [3, 1, 7, 9];
const proxy2 = [2, 4, 1, 9, 3];

let sum = 0;

for (let i = 0; i < proxy1.length; i++) {
    if (!proxy2.includes(proxy1[i])) {
        sum += proxy1[i];
    }
}

for (let i = 0; i < proxy2.length; i++) {
    if (!proxy1.includes(proxy2[i])) {
        sum += proxy2[i];
    }
}
    return sum;



//// solution 2

//// >>> using hash table

const numb1 = [3, 1, 7, 9];
const numb2 = [2, 4, 1, 9, 3];

let hash = {};

for(let i = 0; i < numb1.length; i++) {
    if(hash.hasOwnProperty(numb1[i])) {
        hash[numb1[i]]++;
    } else {
        hash[numb1[i]] = 1;
    }
}

for(let i = 0; i < numb2.length; i++) {
    if(hash.hasOwnProperty(numb2[i])) {
        hash[numb2[i]]++;
    } else {
        hash[numb2[i]] = 1;
    }
}

let summation = 0; // can't use sum cause of the error, so I used summation
Object.keys(hash).forEach(function(key) {
    if (hash[key] === 1) {
        summation += parseInt(key);
    }
});
     return summation;



// >>> Algorithm of overlapping elements


let set1 = new Set([3, 1, 7, 9]);
let set2 = new Set([2, 4, 1, 9, 3]);

let overlappingElements = [...set1].filter(x => set2.has(x));

let summation1 = overlappingElements.reduce((a, b) => a + b); // can't use sum cause of the error, so I used summation1
    return summation1;  
