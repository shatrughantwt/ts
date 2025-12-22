 interface Chai {
    flavor: string;
    price: number;
    milk?: boolean
 }

 const masala: Chai = {
    flavor: "masala",
    price: 44
 }


 interface Shop {
    readonly id: number
    name: string
 }

 const s: Shop = {
    id:1,
    name: "Boruto"
 }

 interface Dio{
    (price:number):number
 }

 const apply50: Dio = (p) => p *0.5


 interface TeaM{
    start():void;
    stop():void
 }

 const machine:TeaM = {
    start(){
        console.log("start");
     },
     stop(){
        console.log('stop');
     }
 }

 interface ChaiR{
    [flavor: string]:number
 }


 const ratings: ChaiR = {
    masala: 34,
    ginger: 345
 }

 interface User {
    name: string
 }

 interface User{
    age: number
 }

 const u: User = {
    name:"Boruto",
    age: 45
 }


 
