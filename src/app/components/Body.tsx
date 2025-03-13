import { useState, useEffect } from "react"
import { items } from "../data/item"
import { FilterListMonth, getcurrentMonth } from "../Helpers/dataFilter";
import { item } from "../types/items";
import { TableArea } from "./TableArea";
import { InfoArea } from "./infoArea";
import { categorias } from "../data/categories";
import { InsertArea } from "./insertArea";

export const Body = () => {
    //lista de de gastos e rendas
    const [list, setList] = useState(items);
    // Função que salva no localStorage
    const saveDataToLocalStorage = (data:item[]) => {
        localStorage.setItem("myDataArray", JSON.stringify(list));
    }

    //função que busca no localStorage
    const GetDataToLocalStorage = () => {
        const storedData = localStorage.getItem("myDataArray");
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            // Convertendo o campo `date` de volta para `Date` em cada item
            const dataWithDates = parsedData.map((item: item) => ({
                ...item,
                date: new Date(item.date)  // Convertendo string para Date
            }));
            setList(dataWithDates);
        }
    };
    //lista filtrada pelo mes
    const [listFilter, setListFilter] = useState<item[]>([])
    //pega o mês atual
    const [curentMonth, setCurrentMonth] = useState(getcurrentMonth())

    const [income, setIncome] = useState(0)
    const [expense, setExpense] = useState(0)

    // somando gastos e rendas no mês atual
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

    // add novo gasto/ renda na lista 
    function handleInsert(item: item){
        let newList = [...list]
        newList.push(item)
        setList(newList)
        console.log("Adicionado...")
    }

    //busca no localstorage assim que o componete é renderizado
    useEffect(()=>{
        GetDataToLocalStorage()
    },[])

    // salva o item no localStorage quando a lista é alterada
    useEffect(()=>{
        saveDataToLocalStorage(list)
    },[list])

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