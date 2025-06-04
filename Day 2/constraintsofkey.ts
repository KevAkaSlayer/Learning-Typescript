{

    // generics constraints with keyof operator 


    type Vehicle = {
        bike : string;
        car : string;
        ship : string;
    }

    type Owner = "bike" | "car" | "ship" // manually

    type Owner2 = keyof Vehicle

    const user = {
        name : "hamim",
        age : 28 ,
        address : "ctg"
    }

    function getPropertyValue <X,Y extends keyof X>(obj : X,key : Y) {
        return obj[key];
    }
    
    const result1 = getPropertyValue(user ,'name')

    console.log(result1);


}