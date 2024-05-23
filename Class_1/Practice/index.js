class Employee{
    constructor(name,id,salary,joiningYear){
        this.name= name;
        this.id= id;
        this.salary = salary;
        this.joiningYear = joiningYear;
    }
    getIncomeAfterTax(tax){
        return (this.salary - (this.salary*tax)/100);
    }
    getRetire(){
        let v = new Date();
        let year = v.getFullYear();
        let p = year - this.joiningYear;
        return year + (40-p);
    }
}
var E1 = Employee("Gaurav" , 111,100000,2004);
console.log(E1.getIncomeAfterTax(10));
console.log(E1.getRetire());