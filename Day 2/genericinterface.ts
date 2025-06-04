{

    // interface - generic


    interface Developer<T,X = null> {
        name: string;

        computer: {
            brand: string;
            model: string;
            releaseYear: number
        }

        smartWatch: T;
        bike?: X;
    }

    type smartwatch1 = {
        brand: string,
        model: string
    };

    interface smartwatch2 {
        brand: string,
        model: string,
        heartBitTrack: boolean
    };

    interface bike {
        brand : string,
        model : string ,
        cc: number
    }



    const poorDeveloper: Developer<smartwatch1> = {
        name: 'jahid',
        computer: {
            brand: 'Asus',
            model: 'x-20182',
            releaseYear: 2020
        },
        smartWatch: {
            brand: 'samsung',
            model: 'ts3'
        }
    }
    const richDeveloper: Developer<smartwatch2,bike> = {
        name: 'kevin',
        computer: {
            brand: 'Mac',
            model: 'Macbook pro',
            releaseYear: 2024
        },
        smartWatch: {
            brand: 'Apple Watch',
            model: 'Pro',
            heartBitTrack: true
        },
        bike :{
            brand : "Yamaha",
            model : "MT-15",
            cc : 250
        }
    }




}