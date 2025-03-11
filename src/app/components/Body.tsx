import { useState, useEffect } from "react"
import { items } from "../data/item"
import { FilterListMonth, getcurrentMonth } from "../Helpers/dataFilter";
import { item } from "../types/items";
import { TableArea } from "./TableArea";
import { InfoArea } from "./infoArea";

export const Body = () => {
    const [list, setList] = useState(items);
    //lista filtrada pelo ano
    const [listFilter, setListFilter] = useState<item[]>([])
    //pega o mês atual
    const [curentMonth, setCurrentMonth] = useState(getcurrentMonth())

    useEffect(()=>{
         setListFilter( FilterListMonth(list, curentMonth) );
    },[list, curentMonth])

    function handleMonthChage(newMonth:string){
        setCurrentMonth(newMonth)
    }
    return (
        <div className="m-auto max-w-[980px]">
            <InfoArea
                 CurrentMonth={curentMonth}
                 onMonthChange={handleMonthChage}
                 />
           <TableArea list={listFilter}/>
        </div>
    )
}