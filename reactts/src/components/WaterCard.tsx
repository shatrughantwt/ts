interface WaterCardProp{
    name: string;
    price: number;
    isSpecial?: boolean
}

export function WaterCard({ name, price, isSpecial = false }:WaterCardProp) {
  return (
    <article>
      <h2>
        {name} {isSpecial && <span>4</span>}
      </h2>
      <p>{price}</p>
    </article>
  );
}
