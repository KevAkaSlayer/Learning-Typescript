// learning function 


// normal function

function add(num1 : number, num2 : number):number{
    return num1 + num2
}

console.log(add(2,2));

const addArrow = (num1:number , num2: number) : number => num1 + num2



// object -> function -> is called method (function inside of an object)


const NormUser = {
    name: 'hello',
    balance:0,
    addBalance(balance:number): number{
        return this.balance + balance
    }
}



const arr : number[] = [1,2,3,4]

const newArray : number[] = arr.map((i : number):number =>i * i)