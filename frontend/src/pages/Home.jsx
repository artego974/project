import React, { useState } from 'react'
import Card from '../components/Card'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    const [search, setSerch] = useState("")
    return (

        <div className='h-screen flex flex-col'>
            <div className='w-full h-1/6 flex bg-neutral-100'>
                <div className='w-1/2 flex items-center justify-end'>
                    <form action="submit" className='w-full gap-3 p-8 ml-3'>
                        <input value={search} onChange={(e)=> setSerch(e.target.value)} type="text" className='border w-full rounded-3xl  placeholder: font-bold p-2 ' placeholder='Pesquisar' />
                    </form>
                </div>
                <div className='w-1/2 flex justify-center items-center'>
                        <button className='p-3 m-3 bg-green-300 rounded-3xl text-white hover:cursor-pointer ' onClick={()=> navigate("/create")} >Criar</button>
                        <button className='p-3 m-3 bg-blue-300 rounded-3xl text-white hover:cursor-pointer' onClick={()=> navigate("/edit") }>Editar</button>
                        <button className='p-3 m-3 bg-red-300 rounded-3xl text-white hover:cursor-pointer ' onClick={()=> navigate("/delete")}>Deletar</button>
                </div>
            </div>
            <div className='flex justify-center items-center flex-col'>
                <h1  className='font-bold text-3xl mt-10'>Convidados</h1>
                <div className='flex flex-wrap w-full h-full p-5'>
                    <Card/>
                </div>
            </div>

        </div>
    )
}

export default Home