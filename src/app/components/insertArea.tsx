import { useState } from "react";
import { categorias } from "../data/categories";
import { item } from "../types/items";

type Props = {
    onClick: (item: item) => void;
}

export const InsertArea = ({onClick}:Props) => {

    const [data, setData] = useState("")
    const [categoria, setcategoria] = useState("")
    const [titulo, setTitulo] = useState("")
    const [valor, setValor] = useState("")

    function handleAddEvent(){
        if(data && titulo && categoria && valor){
            const Newdate = new Date(data)
            Newdate.setMonth(Newdate.getMonth() + 1) 
            let Newitem:item = {
                date: Newdate,
                category: categoria,
                title: titulo,
                 value: parseFloat(valor)
            }
            onClick(Newitem);
            setData("");
            setcategoria("");
            setTitulo("");
            setValor("");
        } else {
            alert("Preencha todos os campos antes de adicionar.")
        }
    }

    return(
        <div className="w-[100%] bg-white shadow-[0px_0px_5px_#ccc] rounded-[10px] p-[20px] flex justify-between items-center mt-10 ml-[-22px] text-black">
            <div className="flex flex-col gap-2">
                <p className="font-bold">Data</p>
                <input
                     type="date"
                    className="border rounded-sm border-[#116D6E] p-1"
                    value={data}
                    onChange={e => setData(e.target.value)}
                    />
            </div>
            <div className="flex flex-col gap-2">
                <p className="font-bold">Categoria</p>
                <select 
                    value={categoria}
                    onChange={e => setcategoria(e.target.value)}
                    className="border rounded-sm border-[#116D6E] p-[6px] w-44"
                >
                    <option value=""></option>
                    {Object.keys(categorias).map((key) => (
                        <option key={key} value={key}>
                            {categorias[key].title}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <p className="font-bold">Titulo</p>
                <input
                     type="text"
                      className="border rounded-sm border-[#116D6E] p-1"
                      value={titulo}
                      onChange={e => setTitulo(e.target.value)}
                      />
            </div>
            <div className="flex flex-col gap-2">
                <p className="font-bold">Valor</p>
                <input
                    type="number"
                     className="border rounded-sm border-[#116D6E] p-1"
                     value={valor}
                     onChange={e => setValor(e.target.value)}
                     />
            </div>
            <button onClick={handleAddEvent} className="text-white pt-1 pb-1 pl-3 pr-3 rounded-md bg-[#116D6E] mt-8">adicionar</button>
        </div>
    )
}