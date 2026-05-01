import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    const [search, setSearch] = useState("")
    const [convidados, setConvidados] = useState([])
    const [loading, setLoading] = useState(true)
    const [erro, setErro] = useState(null)

    // Busca todos ao montar
    useEffect(() => {
        fetchTodos()
    }, [])

    async function fetchTodos() {
        setLoading(true)
        setErro(null)
        try {
            const response = await fetch('http://localhost:3000/convidados/list')
            if (!response.ok) throw new Error()
            const data = await response.json()
            setConvidados(data)
        } catch {
            setErro("Não foi possível carregar os convidados.")
        } finally {
            setLoading(false)
        }
    }

    async function handleSearch(e) {
        e.preventDefault()
        if (!search.trim()) {
            fetchTodos()
            return
        }
        setLoading(true)
        setErro(null)
        try {
            const response = await fetch(`http://localhost:3000/convidados/listBy?nome=${encodeURIComponent(search.trim())}`)
            if (!response.ok) throw new Error()
            const data = await response.json()
            setConvidados(data)
        } catch {
            setErro("Erro ao buscar convidados.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='min-h-screen flex flex-col'>
            <div className='w-full h-1/6 flex bg-neutral-100'>
                <div className='w-1/2 flex items-center justify-end'>
                    <div className='w-full gap-3 p-8 ml-3 flex'>
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch(e)}
                            type="text"
                            className='border w-full rounded-3xl font-bold p-2'
                            placeholder='Pesquisar por nome'
                        />
                        <button
                            onClick={handleSearch}
                            className='p-2 px-4 bg-gray-700 rounded-3xl text-white font-bold hover:bg-gray-800 transition-colors'
                        >
                            Buscar
                        </button>
                    </div>
                </div>
                <div className='w-1/2 flex justify-center items-center'>
                    <button className='p-3 m-3 font-bold bg-green-300 rounded-3xl text-white hover:cursor-pointer hover:bg-green-400 transition-colors' onClick={() => navigate("/create")}>Criar</button>
                    <button className='p-3 m-3 font-bold bg-blue-300 rounded-3xl text-white hover:cursor-pointer hover:bg-blue-400 transition-colors' onClick={() => navigate("/edit")}>Editar</button>
                    <button className='p-3 m-3 font-bold bg-red-300 rounded-3xl text-white hover:cursor-pointer hover:bg-red-400 transition-colors' onClick={() => navigate("/delete")}>Deletar</button>
                </div>
            </div>
            <div className='flex justify-center items-center flex-col'>
                <h1 className='font-bold text-3xl mt-10 mb-10'>Convidados</h1>
                {loading && <p className="text-gray-400">Carregando...</p>}
                {erro && <p className="text-red-400">{erro}</p>}
                {!loading && !erro && (
                    <div className='flex flex-wrap w-full h-full p-5 gap-4 justify-center'>
                        <Card convidados={convidados} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home