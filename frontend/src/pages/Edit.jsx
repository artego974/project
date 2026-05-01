import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Edit() {
    const navigate = useNavigate()

    const [id, setId] = useState("")
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [cpf, setCpf] = useState("")
    const [telefone, setTelefone] = useState("")
    const [data, setData] = useState("")
    const [loading, setLoading] = useState(false)
    const [erro, setErro] = useState(null)

    async function edit(e) {
        e.preventDefault()
        setErro(null)

        if (!id) {
            setErro("Informe o ID do convidado a ser editado.")
            return
        }

        const body = {}
        if (nome) body.nome = nome
        if (email) body.email = email
        if (cpf) body.cpf = cpf
        if (telefone) body.telefone = telefone
        if (data) body.data = data

        if (Object.keys(body).length === 0) {
            setErro("Preencha ao menos um campo para atualizar.")
            return
        }

        setLoading(true)
        try {
            const response = await fetch(`http://localhost:3000/convidados/update/${id}`, {
                method: 'PUT',
                body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' }
            })
            if (!response.ok) throw new Error('Erro ao atualizar convidado')
            await response.json()
            navigate("/")
        } catch (e) {
            console.error("Erro:", e)
            setErro("Não foi possível atualizar o convidado. Verifique o ID e tente novamente.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='h-screen w-full flex flex-col justify-center items-center'>
            <div className='w-1/3 min-h-1/3 shadow-2xl flex flex-col items-center rounded-2xl p-5'>
                <h1 className='font-bold text-2xl mt-5'>Alterar Convidado</h1>

                {erro && <p className='text-red-500 mt-3 text-sm'>{erro}</p>}

                <div className='flex flex-col w-full mt-5 justify-center items-center'>
                    <input
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        type="text"
                        className='w-full p-2 border rounded-2xl mb-3 placeholder:text-black cursor-pointer bg-gray-50 font-semibold'
                        placeholder='ID do convidado *'
                    />
                    <input
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        type="text"
                        className='w-full p-2 border rounded-2xl mb-3 placeholder:text-black cursor-pointer'
                        placeholder='Nome (opcional)'
                    />
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className='w-full p-2 border rounded-2xl mb-3 placeholder:text-black cursor-pointer'
                        placeholder='Email (opcional)'
                    />
                    <input
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        type="text"
                        className='w-full p-2 border rounded-2xl mb-3 placeholder:text-black cursor-pointer'
                        placeholder='CPF (opcional)'
                    />
                    <input
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        type="text"
                        className='w-full p-2 border rounded-2xl mb-3 placeholder:text-black cursor-pointer'
                        placeholder='Telefone (opcional)'
                    />
                    <input
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                        type="date"
                        className='w-full p-2 border rounded-2xl mb-7 placeholder:text-black cursor-pointer'
                        placeholder='Data (opcional)'
                    />

                    <button
                        onClick={edit}
                        disabled={loading}
                        className='w-1/2 bg-blue-400 p-2 rounded-3xl text-white mb-3 hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                    >
                        {loading ? 'Enviando...' : 'Enviar'}
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

export default Edit