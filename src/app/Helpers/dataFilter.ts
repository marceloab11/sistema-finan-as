import { item } from "../types/items"

export function getcurrentMonth(){
    let now = new Date()
    return `${now.getFullYear()}-${now.getMonth()+1}`
}

export function FilterListMonth(list:item[], date:string):item[]{
    let newList: item[] = [];
    let [yaer, month] = date.split("-");

    for(let i in list) {
        if(
            list[i].date.getFullYear() === parseInt(yaer) &&
            (list[i].date.getMonth()) === parseInt(month)
        ) {
            newList.push(list[i]);
        }
    }

    return newList;
}

export const formatDate = (date:Date): string => {
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();
    
    return `${addzero(day)}/${addzero(month)}/${year}`
}

const addzero = (n: number): string => {
    if(n < 10){
        return `0${n}`
    } else {
        return `${n}`
    }
}

export const FormatYearAndMonth = (date: string) => {
    let [yaer, month] = date.split("-");
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    return months[parseInt(month) -1] + " " + yaer
}