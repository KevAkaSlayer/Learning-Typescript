{
// abstraction : 1. interface 2. abstract

//1. interface


interface Vehicle1 {
// idea
    startEngine() : void;
    stopEngine() : void;
    move(): void;
}

// const vehicle1 : Vehicle1 = {
//     name : "Toyota",
//     model : 2000

// }

// real implementation

class Car implements Vehicle1{
    startEngine(): void {
        console.log(`iam starting the car engine`);
    }
    stopEngine(): void {
        console.log(`Iam stoping the car engine`);
    }
    move() : void{
        console.log(`iam moving the car`);
    }
    test(){
        console.log(`iam testing the car`);
    }
}

const toyotaCar = new Car();
toyotaCar.startEngine()


//abstract class
abstract class Bike implements Vehicle1{
    abstract startEngine(): void ;
    abstract stopEngine(): void ;
    abstract move() : void;
    abstract test() : void;
}
class R15 extends Bike{
    startEngine(): void {
        console.log(`iam starting the bike engine`);
    }
    stopEngine(): void {
        console.log(`Iam stoping the bike engine`);
    }
    move() : void{
        console.log(`iam moving the bike`);
    }
    test() : void{
        console.log(`iam testing the bike`);
    }
}


// const suzuki = new Bike()



}