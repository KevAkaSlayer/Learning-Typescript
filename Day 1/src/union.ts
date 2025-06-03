{
// union 

type frontendDeveloper = 'junior' | 'Senior'

const newDev : frontendDeveloper = 'senior'

type user = {

    name: string;
    email:string;
    gender:'male'|'female';
    bloodgroup:'o+'|'a+'|'b+';

}


const hacker : user = {
    name : 'Kev',
    email : 'kevaka@gmail.com',
    gender : 'male',
    bloodgroup: 'b+'
}

// intersection


type FrontendDeveloper = {
    skills : string[];
    designation1 : 'frontend dev'
}

type BackendDeveloper = {
    skills : string[];
    designation2 :'backend dev'
}

type FullstackDeveloper = FrontendDeveloper & BackendDeveloper
const fullstackDeveloper : FullstackDeveloper = {
    skills : ['html','css','react','express'],
    designation1:'frontend dev',
    designation2: 'backend dev'
}


}