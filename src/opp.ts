 class Chai{
    flavour: string;
    // price: number

    // constructor(flavour:string, price: number){
    //     this.flavour = flavour
    //     this.price = price
    // }

    constructor(flavour:string){
        this.flavour = flavour
        console.log(this);
    }
 }


 const masalaChai = new Chai("ginger")
//  masalaChai.flavour = "masala"


class wChai{
    public flavour: string = "masala"
    private secret = "cardamon"
    reveal(){
        return this.secret
    }
}


class Shop {
    protected shopName = "Chai corner"
}

class Branch extends Shop{
    getName(){
        return this.shopName
    }
}

class Walet {
    #balance = 100

    getBalance(){
        return this.#balance
    }
}

const w = new Walet()

class Cup {
    readonly capacity: number = 34

    constructor (capacity: number){
        this.capacity = capacity
    }
}

class ModernChai{
    private _sugar = 3
    get sugar(){
        return this._sugar
    }

    set sugar(value: number){
        if(value>5) throw new Error("Too sweet")
            this._sugar = value
    }
}


const c = new ModernChai()
c.sugar = 4

class EkChai{
    static shopName = "Chaicode caffe"

    constructor (public flavour: string){}
}

console.log(EkChai.shopName);


abstract class Drink{
    abstract make():void
}

class MyChai extends Drink {
    make(){
        console.log("Brewing chia");
    }
}

class Heater{
    heat(){}
}

class ChaiMaker{
    constructor(private heater: Heater){}
    make(){
        this.heater.heat
    }
}