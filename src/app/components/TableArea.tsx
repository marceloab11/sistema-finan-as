import { categorias } from "../data/categories"
import { formatDate } from "../Helpers/dataFilter"
import { item } from "../types/items"

type Props = {
    list:item[]
}

export const TableArea = ({list}:Props) => {
    return(
        <table className="w-[100%] bg-white p-[20px] shadow-[0px_0px_5px_#ccc]  rounded-[10px] ml-[-22px] mt-5">
            <thead>
                <tr className="text-black font-bold">
                    <th className="py-[10px] px-10 text-left">Data</th>
                    <th className="py-[10px] px-10 text-left">Categoria</th>
                    <th className="py-[10px] px-10 text-left">Título</th>
                    <th className="py-[10px] px-10 text-left">Valor</th>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index)=>(
                    <tr key={index} className="text-black">
                        <td className="py-[10px] px-10 text-left">{formatDate(item.date)}</td>
                        <td className="py-[10px] px-10 text-left">
                            <div className={`inline-block p-[3px_7px] rounded-[5px] text-white ${
                                categorias[item.category].color === "red"
                                ? "bg-[#CD1818]"
                                : categorias[item.category].color === "yellow"
                                ?"bg-[#4E3636]"
                                :categorias[item.category].color === "green"
                                ? "bg-[#116D6E]"
                                :""
                                }`}>
                                {categorias[item.category].title}
                            </div>
                        </td>
                        <td className="py-[10px] px-10 text-left">{item.title}</td>
                        <td className="py-[10px] px-10 text-left">
                            <div className={`inline-block p-[3px_7px] rounded-[5px] text-white ${
                                categorias[item.category].expense === true
                                ? "bg-[#CD1818]"
                                : "bg-[#116D6E] "
                            }`}>
                                R$ {item.value}
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}