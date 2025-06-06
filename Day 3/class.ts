{

    // oop class

    class Animal {
        // name: string;
        // species: string;
        sound: string;

        //parameter properties

        constructor(public name: string,public species: string, sound: string) {
            // this.name = name;
            // this.species = species;
            this.sound = sound;
        }
        makeSound() {
            console.log(`the ${this.name} makes ${this.sound}`); //have to use normal function cause arrow function doesnot support this method
        }
    }

    const dog = new Animal("Benjamin Netaniyahu", "dog", "ghew ghew");

    const cat = new Animal("Donald trump", "cat", "meow meow");

    dog.makeSound()




}