import { useState } from "react"
import { items } from "../data/item"
import { getcurrentMonth } from "../Helpers/dataFilter";

export const Body = () => {
    const [list, setList] = useState(items);
    //pega o mês atual
    const [curentMonth, setCurrentMonth] = useState(getcurrentMonth())

    return (
        <div className="m-auto max-w-[980px]">
           
        </div>
    )
}