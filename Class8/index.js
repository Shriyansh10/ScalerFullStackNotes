// console.log("hello");


// console.log(college);

// there is difference between above and lower code

// console.log(d);
// var d=10;

// var obj = {"1": "String 1", 2: "Number 1"};
// console.log(obj);

// const multiply = function(a, b, c){
//     return a*b*c;
// }

// const compute1 = function(){
//     return multiply(1,2,3);
// }

// const multiplyfn = compute1();
// console.log(multiplyfn);

const names = ['Shriyansh', 'Anubhav', 'Shyam'];

function convertToUpperCase(listOfNames){
    // const finalNames = [];
    for(let i=0;i<listOfNames.length;i++){
        finalNames.push(listOfNames[i].toUpperCase());
    }
    return finalNames;
}

console.log(convertToUpperCase(...names));
console.log(names);