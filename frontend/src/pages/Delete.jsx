import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Delete() {
    const navigate = useNavigate()
    const [id, setId] = useState("")
    const [loading, setLoading] = useState(false)
    const [erro, setErro] = useState(null)

    async function del(e) {
        e.preventDefault()
        setErro(null)

        if (!id) {
            setErro("Informe o ID do convidado.")
            return
        }

        setLoading(true)
        try {
            const response = await fetch(`http://localhost:3000/convidados/delete/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            })
            if (!response.ok) throw new Error('Erro ao deletar convidado')
            await response.json()
            navigate("/")
        } catch (e) {
            console.error("Erro:", e)
            setErro("Não foi possível deletar o convidado. Verifique o ID e tente novamente.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='h-screen w-full flex flex-col justify-center items-center'>
            <div className='w-1/4 min-h-1/3 shadow-2xl flex flex-col items-center rounded-2xl p-5'>
                <h1 className='font-bold text-2xl mt-5'>Deletar Convidado</h1>

                {erro && <p className='text-red-500 mt-3 text-sm text-center'>{erro}</p>}

                <div className='flex flex-col w-full mt-5 justify-center items-center'>
                    <input
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        type="text"
                        className='w-full p-2 border rounded-2xl mb-7 placeholder:text-black cursor-pointer'
                        placeholder='ID do convidado'
                    />
                    <button
                        onClick={del}
                        disabled={loading}
                        className='w-1/2 bg-red-400 p-2 rounded-3xl text-white mb-3 hover:bg-red-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                    >
                        {loading ? 'Deletando...' : 'Deletar'}
                    </button>
                </div>

                <p
                    className='text-blue-500 cursor-pointer hover:underline'
                    onClick={() => navigate("/")}
                >
                    Voltar à página inicial
                </p>
            </div>
        </div>
    )
}

export default Delete