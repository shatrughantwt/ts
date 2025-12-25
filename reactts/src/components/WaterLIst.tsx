import type { Water } from "../types";
import { WaterCard } from "./WaterCard";

interface WaterListProps{
    items: Water[]
}

export function WaterList({items}:WaterListProps){
    return(
        <div>
            {items.map((water)=>(
                <WaterCard
                key={water.id}
                name={water.name}
                price={water.price}
                isSpecial={water.price > 30  }
                />
            ))}
        </div>
    )
}