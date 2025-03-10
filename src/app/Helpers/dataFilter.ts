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
    
    return `${day}/${month}/${year}`
}