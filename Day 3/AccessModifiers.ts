{
// access modifier
class BankAccount {

    constructor(readonly id : number,public name : string,private _balance : number){

    }

    addDeposit(amount : number){
        this._balance = this._balance + amount
    }
    getBalance(){
        return this._balance 
    }
}

const firstAccount = new BankAccount(111,"mr yes",500);

firstAccount.addDeposit(0)




}