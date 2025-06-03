// destructuring
{

    //object destructuring

const user = {
    id : 345,
    name : {
        firstName: 'Amin',
        LastName : 'Islam'
    },
    contactNo:'01634230925',
    address: 'cox'
};

const {contactNo , name : {LastName : name}} = user   // name alias 



// array destructuring


const Friends  = ['first','second','third','fourth']

const [,,num3,...rest] = Friends

}


