{
    // conditional type

    type a1 = null
    type b1 = string 

    type x = a1 extends null ? true : false // conditional type  // true


    type y = a1 extends null ? true : b1 extends undefined ? undefined : any; // any


    type sheikh = {
        bike : string;
        car : string;
        ship : string;
    }

    type checkVehicles<T> = T extends keyof sheikh ? true : false 

    type hasTractor = checkVehicles<"tractor">










}