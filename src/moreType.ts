let response: any = "34";

let numericlength:number = (response as string).length

type book = {
    name: string

}

let bookString = '{"name": "who moved my cheese" }';
let bookObject = JSON.parse(bookString) as book

console.log(bookObject);

const inputElement = document.getElementById("username") as HTMLInputElement


let value: any
value = "water"
value = [1,2,3]
value = 2.5
value.toUpperCase()

let newValue: unknown

newValue = "water"
newValue = [2,5,6]
newValue = 34.5
if(typeof newValue === "string"){
    newValue.toUpperCase();
}


try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("Error", error);
    
}

const data:unknown = "water"
const strData: string = data as string

type Role = "admin" | "user" | "superAdmin"

function riderect(role:Role): void{
    if(role === "admin"){
        console.log("r to admin");
        return;
    }
    if(role === "user"){
        console.log("r to user");
        return
    }
    role;
}

function neverReturn():never{
    while(true){}
}