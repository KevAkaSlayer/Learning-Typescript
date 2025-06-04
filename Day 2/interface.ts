{

    type User = {
        name : string;
        age : number;
    };

    interface User2 {
        name: string;
        age: number;
    };

    const user1: User2 ={
        name : "Amindx",
        age : 20,
    };

    // difference between interface and type alias  
    // Use interface when:

    // You’re purely describing object shapes.

    // You expect someone (or a library) might augment/merge it later.

    // You want to use implements on classes or extends with other interfaces.

    // Use type alias when:

    // You need to represent something other than a plain object shape (union, tuple, mapped type, etc.).

    // You want to combine existing types (unions/intersections).

    // You don’t need declaration merging.



    // in the case of interface 

    interface Person {
    name: string;
    age: number;
    }

    interface Employee extends Person {
    employeeId: string;
    department: string;
    }

    const emp: Employee = {
    name: "Bob",
    age: 28,
    employeeId: "E123",
    department: "Engineering",
    };

    interface Student {
        name : string;
        class : number;
    }

    interface Group extends Student {
        GroupName : string;
    }


    const student1 : Group = {
        name : "Kevin",
        class: 15,
        GroupName : "CSE"
    }


    //  in the case of type alias 


    type Object = {
        name : string;
        shape : string;
    };

    type parts = Object & {
        price : number;
    };

    const tire : parts = {
        name: "mrf",
        shape : "circle",
        price: 100
    }

    // js --> object , array --> object function --> object 

    type Roll = number[];

    interface Roll1 {

        // index are numbers and holding also numbers 
        [index : number] : number
    }

    const rollNumber1: Roll = [1,2,3]

    type name = string[];

    interface Naming {
        [index : number] : string;
    }

    const name1 : name = ["hello","this","is", "Kevin"]

    //  note -> function is also a object in the javascript

    type Add =(num1 : number , num2 : number) =>number

    interface Adding {
        (num1 : number , num2 : number ) : number
    }
    const add : Adding = (num1, num2) =>{
        return num1 + num2;
    }


//  recommended 
    // . for Array and function use Type aliasing 
    //  . for object use interface


}