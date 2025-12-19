let subs: number | string  = "1m"

let apiRequestStatus: "pending" |"success" | "error" = "pending";

let os: "linux" | "window" | "middle" = "linux";

os = "linux";

const orders = ["12", "20", "28", "42"];
let curretorder: string | undefined;

for(let order of orders) {
    if(order === "28"){
        curretorder = order;
        break;
    }
    curretorder = "11";
}

console.log(curretorder);

