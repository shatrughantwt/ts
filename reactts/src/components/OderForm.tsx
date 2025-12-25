import { useState } from "react"

interface OrderFormProps{
    onSubmit(order: {name: string; cups: number}): void
}
export function OrderForm({onSubmit}: OrderFormProps){
    const [name, setName] = useState<string>("Honey")
    const [cups, setCups] = useState<number>(1)
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Water Name</label>
            <input value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setName(e.target.value)} />
           
           <label>Cups</label>
            <input type="number" value={cups} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setName(e.target.value)} />
        </form>
    )
}