const bill = [100, 200, 300, 400, 500];

function total (bill){
    let tot = 0;
    bill.forEach(function(item, idx){
        tot = item + tot;
    })
    return tot;
}

console.log(total(bill));