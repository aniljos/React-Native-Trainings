
//objects literals

let employee = {
    id: 1,
    name: "Anil",
    salary: 90000,

    print: function(){
        console.log(this);
    }
}
console.log("id", employee.id);
console.log("id", employee["id"]);
employee.id = 2;
console.log("id", employee.id);

employee.print();
employee = {};
//employee.print();


//construction functions




function Product(id, name, price, category){
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.createdDate = new Date();
    this.print = function(){
        console.log(this);
    }
}

const product = new Product(1, "Samsung Galaxy S22", 60000, "Mobiles");
// console.log("Product", product);
product.print();


//classes(ES6)

class Order{

    constructor(id, orderDate, products){

        this.id = id;
        this.orderDate = orderDate;
        this.products = products;
    }

    print(){
        console.log("ID", this.id);
        console.log("OrderDate", this.orderDate);
        console.log("Products", this.products);
    }

}

const order = new Order(100, new Date(), [new Product(1, "p1", 2000, "c1"), new Product(2, "p2", 6000, "c1")]);
order.print();