{
    // mapped types


    const arrayOfNum : number[] = [1,2,3,4];

    // const arrayOfString : string[] = ['1','2','3','4'];

    const arrayOfString : string[] = arrayOfNum.map(number => number.toString())

    console.log(arrayOfString);

    type Area = {
        height : number;
        width : number;
    };


    // type AreaString = {
    //     height : string;
    //     width : string;
    // }

    type AreaString<T> = {
        [i in keyof T]:T[i]
    }

    type Height = Area["height"] //look up type 

    const Area1 : AreaString <{height : string, width : number}> ={
        height : "100",
        width : 100,
    }






}