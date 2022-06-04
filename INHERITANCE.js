let Car = {
    modle: 2022,
    color: "Black",
}

let c = Object.create(Car,{name:{value: "Verna"}})
console.log(c)

function Modles (name,color,company){
    this.name = name;
    this.color = color;
    this.company =company;
}

Modles.prototype.price = function (price){
    this.price = price;
}

let p = new Modles("Thar","Red Mat Finish","Mahindra")
p.price(1200000)
console.log(p)