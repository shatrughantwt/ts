type WaterOder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeWater(order: WaterOder) {
  console.log(order);
}

function serveWater(order: WaterOder) {
  console.log(order);
}

type WaterRecipe={
    water: number;
    milk: number;
}

class WaterWoi implements WaterRecipe{
    water = 100;
    milk = 50;
}

interface CupSize{
    size: "small" | "large"
}

class Water implements CupSize{
    size: "small" | "large" = "large";
}

// type Response = {ok: true} | {ok: false}
// class myRes implements Response {
//     ok: boolean = true
// }

type WaterType = "honey" | "ginger" | "lemon"

function orderWater(t: WaterType){
    console.log(t);
}

type BaseWater = {Leaves: number}
type Extra = {honey:number}

type honeyWater = BaseWater & Extra

const cup: honeyWater={
    Leaves: 2,
    honey: 1
}


type User = {
    username: string;
    bio?: string
}


const u1: User = {username: "Boruto"}
const u2: User = {username: "Boruto", bio: "boruto.ai"}

type config = {
    readonly appName: string
    version: number
}

const cfg: config = {
    appName: "Otsutsuki",
    version:1
}

// cfg.appName = "uzumaki"