import { formatDate } from "../Helpers/dataFilter"
import { item } from "../types/items"

type Props = {
    list:item[]
}

export const TableArea = ({list}:Props) => {
    return(
        <table className="w-[100%] bg-white p-[20px] shadow-[0px_0px_5px_#ccc]  rounded-[10px] mt-[20px]">
            <thead>
                <tr className="text-black font-bold">
                    <th className="py-[10px] px-0 text-left">Data</th>
                    <th className="py-[10px] px-0 text-left">Categoria</th>
                    <th className="py-[10px] px-0 text-left">Título</th>
                    <th className="py-[10px] px-0 text-left">Valor</th>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index)=>(
                    <tr key={index} className="text-black">
                        <td>{formatDate(item.date)}</td>
                        <td>{item.category}</td>
                        <td>{item.title}</td>
                        <td>R$ {item.value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}