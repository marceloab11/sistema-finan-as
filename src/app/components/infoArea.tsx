import { futimes } from "fs";
import { FormatYearAndMonth } from "../Helpers/dataFilter";
import { useState } from "react";
import { ResumeItem } from "./ResumeItem";

type Props = {
    CurrentMonth: string;
    onMonthChange: (newMonth:string) => void;
    income:number,
    expense:number
}

export const InfoArea = ({CurrentMonth, onMonthChange, income, expense}:Props) => {

    function handlePrevMonth(){
        const [year, month] = CurrentMonth.split("-")
        const CurrentDate = new Date(parseInt(year), parseInt(month) -1, 1)
        CurrentDate.setMonth(CurrentDate.getMonth() - 1)
        
        onMonthChange(`${CurrentDate.getFullYear()}-${CurrentDate.getMonth() + 1}`)
    }

    function handleNextMonth(){
        const [year, month] = CurrentMonth.split("-")
        const CurrentDate = new Date(parseInt(year), parseInt(month) -1, 1)
        CurrentDate.setMonth(CurrentDate.getMonth() + 1)
        
        onMonthChange(`${CurrentDate.getFullYear()}-${CurrentDate.getMonth() + 1}`)
    }

    return(
        <div className="w-[100%] bg-white shadow-[0px_0px_5px_#ccc] rounded-[10px] p-[20px] m-[-25px] flex items-center">
            {/* Month Area */}
            <div className="flex-1 flex items-center">
                <button className="w-[40px] text-center text-[25px] cursor-pointer" onClick={handlePrevMonth}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" color="#116D6E" fill="currentColor" className="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
                        <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1"/>
                    </svg>
                </button>
                <div className="flex-1 text-center text-black">{FormatYearAndMonth(CurrentMonth)}</div>
                <button className="w-[40px] text-center text-[25px] cursor-pointer" onClick={handleNextMonth}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" color="#116D6E" fill="currentColor" className="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                        <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1"/>
                    </svg>
                </button>
            </div>
            {/* Resume area */}
            <div className="flex-[2] flex text-black">
                <ResumeItem title="Receitas" value={income}/>
                <ResumeItem title="Despesas" value={expense}/>
                <ResumeItem
                     title="Balanço"
                     value={income - expense}
                     color={(income - expense) < 0 ? "#CD1818" : "#000"}
                />
            </div>
        </div>
    )
}