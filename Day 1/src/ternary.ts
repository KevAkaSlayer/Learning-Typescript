{

    // ternary operator || optional chaining || nullish coalescing operator



    const age : number = 15;

    if(age >= 20){
        console.log('youth');
    } else {
        console.log('adolescent');
    }


    const isOK = age >= 20 ? 'youth' : 'not youth';
    console.log({isOK});
    
    
    // nullish coalescing operator 

    //null | undefined --> decision making 

    const isAuthenticate = "" ;

    const result1 = isAuthenticate ?? 'Guest';
    const result2 = isAuthenticate ? isAuthenticate : "Guest";
    console.log(result1);


    // optional chaining

    type User = {
        name : string;
        address : {
            city : string;
            road : string;
            presentAddress : string;
            permanentAddress?: string
        }
    }

    const user: User ={
        name : 'kkk',
        address : {
            city : 'ctg',
            road : 'awesome road',
            presentAddress : "ctg",
        }
    }

    const p = user?.address?.permanentAddress ?? 'no permanent address'
    console.log({p});







}