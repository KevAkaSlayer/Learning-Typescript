{
// promise


type Todo = {
    id:number ;
    userId:number;
    title:string;
    completed : boolean
};

const getToDo = async (): Promise<Todo> => {
   const response = await  fetch('https://jsonplaceholder.typicode.com/todos/1')
   const data = await response.json()
   return data 
   
};

// simulate 
    const createPromise = () : Promise<string> => {
        return new Promise<string> ((resolve,reject) => {
            const data : string = "something"
            if(data) {
                resolve(data)
            }else {
                reject('failed to load data')
            }
        })
    }

    //  calling create promise function
    const showData = async() : Promise<string> => {
        const data = await createPromise();
        return data
        // console.log(data);
    }

    showData()
    getToDo()


}