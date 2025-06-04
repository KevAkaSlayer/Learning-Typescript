{
    // constraints --> enforcing some rules . use it when you need to ensure some properties has to be there 
    const addCourseToStudent = <T extends {id : number, name : string, age : number}>(student: T) => {
        const course = "Next Level web development"

        return {
            ...student,
            course
        }
    }

    type user = {
        id : number,
        name: string,
        age: number
    }

    const student1 = addCourseToStudent<user>({
        id : 11223,
        name: "Abdullah",
        age: 29
    })

    console.log(student1);

}







