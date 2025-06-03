{
    // spread 
    // Rest operator


    // Spread

    const Bros : string[] = ['A','B','C']
    const broski : string[] = ['c','d','e']

    Bros.push(...broski)

    

    // rest operator 

    const greedy = (...fr : string[]) => {
        fr.forEach((i : string)=>{
            console.log(`hi ${i}`);
        })
    }

    greedy('nig','black','white')







}