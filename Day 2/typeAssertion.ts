// type assertion 
{

let anything : any;

anything = "next level development";

anything = 222;

const kgToGram = (value : string | number) : string |number|undefined =>{
    if(typeof value === 'string'){
        const convertedValue = parseFloat(value) * 1000;
        return `the converted Value is : ${convertedValue}`
    }

    if(typeof value === 'number') {
        return value * 1000;
    }
}

const result1 = kgToGram(867) as number;
const result2 = kgToGram("54") as string;

console.log(result1);
console.log(result2);

type CustomError ={
    message : string
}

try{

}catch(error){
    console.log((error as CustomError).message);
}

}