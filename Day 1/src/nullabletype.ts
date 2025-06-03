{
    
    
    // nullable type
    const searchName = (value: string | null) => {
        if(value) {
            console.log("searching");
        }else {
            console.log("there is nothing to search");
        }
    }

    searchName(null);

    // unknown typeof -> in runtime
 
    const getSpeedMeterPerSecond = (value : unknown) => {
        if(typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`the speed is ${convertedSpeed} ms^-1`);
        }
        else if(typeof value === 'string') {
            const [v,unit] = value.split(" ");
            const convertedSpeed = (parseFloat(v) * 1000) / 3600;
            console.log(`the speed is ${convertedSpeed} ms^-1`);
            console.log(unit);
        } else {
            console.log("this is not a correct input");
        }
    };

    getSpeedMeterPerSecond(`1000 kmh^-1`);


    // never type 

    const throwError = (msg : string) => {
        throw new Error (msg);
    }

    throwError('mushkill se error hogaya');


}