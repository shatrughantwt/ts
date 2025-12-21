const chaiFlavours: string[] =["masala", "adrakf"]
const chaiPrice: number[] = [10,20]

const rating: Array<number> = [3.4,3.4]


type Chai = {
    name: string;
    price: number;
}

const menu: Chai[] = [
    {name: "masala", price: 345},
    {name: "adrak", price: 45}
]

const cities: readonly string[] = ["delhi","jaipur"]
 

const table: number[][] = [
    [3,5,6],
    [3,4,5]
]


let chaiTuple: [string,number]
chaiTuple = ["djkf", 34]

let userInfo: [string,number,boolean?]
userInfo = ["boruto",34]
userInfo = ["boruto",354,true]



const location: readonly [number,number] = [34,535]
const chaiItems: [name:string,price:number] = ["boruto",34]

enum CupSize{
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE

enum Status{
    PENDING = 399,
    SERVED, //101
    CANCELLED //143
}

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}


function makeChai(type: ChaiType){
    console.log(`Making: ${type}`);
}

makeChai(ChaiType.GINGER)
//makeChai("masala")

enum RandomEnum{
    ID = 1,
    NAME = "chai"
}

const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

let t: [string,number] = ["Water",35]
t.push("extra")