const chai = {
    name: "masala chai",
    price: 30,
    isHot: true
}

// {
//     name: string;
//     price: number;
//     isHot: boolean
// }


let tea: {
    name: string;
    price: number;
    isHot: boolean;
}

tea ={
    name: "giner",
    price: 345,
    isHot: true
}

type Tea = {
    name: string;
    price: number;
    ingredients: string[]
}

const adrakChai: Tea = {
    name: "adrak chai",
    price: 345,
    ingredients: ["gkg", "dgj"]
}

type Cup = {size: string};
let smallCup: Cup = {size: "3443"}

let bigCup = {size: "45o", material: 'steel'}
smallCup = bigCup


type Brew = {brewTime: number}

const coffee = {brewTime:4, beans: "arav"}
const chaiBrew: Brew = coffee

type User = {
    username: string;
    password: string
}

const u: User= {
    username: "boruto",
    password: "534"
}

type Item = {name: string, quantity: number}
type Address = {street: string, pin: number}

type Order = {
    id: string;
    items: Item[];
    address: Address
}


type Chai = {
    name: string;
    price: number;
    isHot: boolean
}

const updateChai = (updates: Partial<Chai>)=>{
    console.log("updating chai with", updates);
}


updateChai({price:345})
updateChai({isHot: false})
updateChai({})

type ChaiOrder = {
    name?:string;
    quantity?:number
}

const placeOrder = (order: Required <ChaiOrder>)=>{
    console.log(order);
}

placeOrder({
    name: "Masala Chai",
    quantity:34
})


type wChai = {
    name: string;
    price: number;
    isHot: boolean
    ingredients: string[]
}

type BasicChaiInfo =  Pick<wChai, "name" | "price">;

const ChaiInfo: BasicChaiInfo={
        name:"lemon tea"   ,
        price: 34
}

type ChaiNew = {
    name: string;
    price: number;
    isHot: boolean;
    secret: string;
};

type PublicChai = Omit<Chai, "secret">;