import "./App.css";
import { Counter } from "./components/Counter";
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
    </>
  );
}

export default App;
