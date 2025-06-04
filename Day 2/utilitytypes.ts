{
    // utility types 

    // Pick 

    type Person = {
        name : string;
        age : number ;
        email?: string;
        contactNo : string
    }

    type info = Pick<Person,'name'|'age'>

    // omit

    type contactInfo = Omit<Person,'name'>

    //required 

    type personReq = Required<Person>

    // partial 

    type PersonPar = Partial<Person>

    // readonly 

    type ReadOnlyPerson = Readonly<Person> 

    const person1 : ReadOnlyPerson = {
        name : "Mr",
        age : 24,
        contactNo: "1938839"
    }

    // record type

    // type MyObj = {
    //     a : string,
    //     b : string;
        
    // }

    type MyObj = Record<string,string>

    const obj1 : MyObj = {
        a : "aa",
        b : "bb",
        c : "cc"
    }
    


}