import "./App.css";
import { Card } from "./components/Card";
import { Counter } from "./components/Counter";
import { OrderForm } from "./components/OderForm";
import { WaterCard } from "./components/WaterCard";
import { WaterList } from "./components/WaterLIst";
import type { Water } from "./types";


const menu: water[]= [
  {
    id:1, name: "masala", price:25
  },
  {
    id:2, name: "honey", price: 50
  },
  {
    id:3, name: "Lemon", price: 50
  }
]
function App() {
  return (
    <>
    <div>
      <h1>Vite + React</h1>
      <WaterCard name="Headphones" price={5000} />
      <WaterCard name="iphone" price={60000} />
    </div>
    <div>
      <Counter/>
    </div>
    <div>
      <WaterList items={menu}/>
    </div>
    <div>
      <OrderForm 
      onSubmit={(order)=>{
        console.log("Placed", order.name, order.cups);
      }}
      />
    </div>
    <div>
      <Card 
      title="Water or TS"
      footer={<button>Order Now</button>}
      />
    </div>
    </>
  );
}

export default App;
