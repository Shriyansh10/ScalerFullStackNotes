const data = [['name', 'Shriyansh'],['city','Bangalore'],['age', 20]];


function convertIntoObj(arr){
    let obj = {};
    return arr.reduce(function(acc, item){
        console.log(acc, item);
        acc[item[0]] = item[1];
        return acc;
    }, {});
    // return obj;
}

console.log(convertIntoObj(data));