import { useState, useEffect } from "react"
import { items } from "../data/item"
import { FilterListMonth, getcurrentMonth } from "../Helpers/dataFilter";
import { item } from "../types/items";
import { TableArea } from "./TableArea";
import { InfoArea } from "./infoArea";
import { categorias } from "../data/categories";
import { InsertArea } from "./insertArea";

export const Body = () => {
    const [list, setList] = useState(items);
    //lista filtrada pelo mes
    const [listFilter, setListFilter] = useState<item[]>([])
    //pega o mês atual
    const [curentMonth, setCurrentMonth] = useState(getcurrentMonth())

    const [income, setIncome] = useState(0)
    const [expense, setExpense] = useState(0)

    useEffect(()=>{
        let incomeCount = 0 
        let expenseCount = 0

        for(let i in listFilter){
            if(categorias[listFilter[i].category].expense){
                expenseCount += listFilter[i].value
            } else {
                incomeCount += listFilter[i].value
            }

            setExpense(expenseCount)
            setIncome(incomeCount)
        }
    },[listFilter])

    useEffect(()=>{
         setListFilter( FilterListMonth(list, curentMonth) );
    },[list, curentMonth])

    function handleMonthChage(newMonth:string){
        setCurrentMonth(newMonth)
    }

    function handleInsert(item: item){
        let newList = [...list]
        newList.push(item)
        setList(newList)
    }

    return (
        <div className="m-auto max-w-[980px]">
            <InfoArea
                 CurrentMonth={curentMonth}
                 onMonthChange={handleMonthChage}
                 income={income}
                 expense={expense}
                 />
            
            <InsertArea onClick={handleInsert} />

           <TableArea list={listFilter}/>
        </div>
    )
}