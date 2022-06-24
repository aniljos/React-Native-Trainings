const user = {
    id: 1,
    print: function(){
        console.log("Id: ", this.id);
    }
}

function print(obj){
    console.log("Id: ", obj.id);
}

user.print();

const employee = {
    id: 10,
    name: "Anil"
}

//employee.print();

const employeePrint = user.print.bind(employee);
employeePrint();
user.print();

