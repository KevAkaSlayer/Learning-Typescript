{
// type guard using typeof and in


// typeof --> type guard 

type alphaNumeric = string | number


const add = (param1 : alphaNumeric,param2 : alphaNumeric):alphaNumeric=>{
    if(typeof param1 == "number" && typeof param2 == "number"){
        return param1 + param2;
    } else {
        return param1.toString() + param2.toString();
    }
    
}

const res = add(2,4);
console.log(res);

//type in --> type guard


type NormalUser = {
    name : string
}

type AdminUser = {
    name : string;
    role : "admin"
}

const getUser = (user : NormalUser | AdminUser ) =>{
    if('role' in user) {
        console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
        console.log(`My name is ${user.name}`);
    }
}


const normalUser : NormalUser = {
    name : "mr A"
}


const adminUser : AdminUser = {
    name : "Mr admin",
    role : "admin",
}

getUser(adminUser)

}