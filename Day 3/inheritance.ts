{
    //oop- inheritance


    class Person {
        name: string;
        age: string;
        address: string;


        constructor(name: string, age: string, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }


        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours} hours`);
        }
    }


    class Student extends Person {
        

        constructor(name: string, age: string, address: string) {
            super(name,age,address)
        }

    }

    const student1 = new Student("kevin", "25", "ctg");

    student1.getSleep(10);
    class Teacher extends Person {


        constructor(public name: string, public age: string, public address: string, public designation: string) {
            super(name,age,address)

        }


        getTeachingTime(numOfHours: number) {
            console.log(`${this.name} will teach for ${numOfHours} hours`);
        }
    }

    const teacher1 = new Teacher("halua", "30", "ctg", "lecturer");
    teacher1.getTeachingTime(30);


}