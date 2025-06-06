{
// access modifier
class BankAccount {

    constructor(readonly id : number,public name : string,private _balance : number){

    }

    set deposit(amount : number){
        this._balance = this._balance + amount;
    }

    // addDeposit(amount : number){
    //     this._balance = this._balance + amount
    // }
    // getBalance(){
    //     return this._balance 
    // }

    get Balance(){
        return this._balance;
    }
}

const firstAccount = new BankAccount(111,"mr yes",500);
firstAccount.deposit = 100;

// firstAccount.addDeposit(0)
const myBalance = firstAccount.Balance
console.log(myBalance);





}