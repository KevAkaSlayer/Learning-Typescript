{
    // generic type -> to generalize the type for reusing and other thing 


    type GenericArray<T> = Array<T>


    // const rollNumbers : number[] = [1,2,3,4];
    const rollNumbers: GenericArray<number> = [1, 2, 3, 4];


    // const mentors : string[] = ['a','b','c'];
    const mentors: GenericArray<string> = ['a', 'b', 'c'];

    // const boolArray : boolean[] = [true,false,true];
    const boolArray: GenericArray<boolean> = [true, false, true];



    const user: GenericArray<{ name: string, age: number }> = [
        {
            name: "kevin",
            age: 100
        },

        {
            name: "robin",
            age: 50
        }
    ]


    // generic tuple 

    type GenericTuple<x,y> = [x , y]

    const human : GenericTuple<string,string> = ['x','y']

    const UserWithId : GenericTuple<number,{name : string,email : string}> = [1234, {
        name : "faruq",
        email : "faruq@gmail.com"
    }]



    // generic with interface 

    interface user {
        name : string;
        email : string;
    }


    const secondUser : GenericArray<user> = [
        {
            name : "kevin",
            email : "kevin@gmail.com"
        }
    ]



}