{
//  functions with generics 

const createArray = (param : string): string[] => {
    return [param]
}
const createArrayWithGeneric = <T>(param : T): T[] => {
    return [param]
}

const res1 = createArray('bangladesh')
const resGen= createArrayWithGeneric(123)

interface user {
    name : string
    age : number
}

const resGeneric = createArrayWithGeneric<user>({
    name : "kevin",
    age : 28
})

const createArrayWithTuple = <T,Q> (param1 : T,param2 : Q) : [T,Q] => {
    return [param1,param2]
}

const rest1 = createArrayWithTuple<string,number>("bangladesh",1971)

const addCourseToStudent = <T>(student : T) =>{
    const course = "Next Level web development"

    return {
        ...student,
        course
    }
} 

type id = {
    name : string ,
    age : number
}

const student1 = addCourseToStudent<id>({
    name : "Abdullah",
    age : 29
})

console.log(student1);

}