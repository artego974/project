import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Create() {
  const navigate = useNavigate()
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [cpf, setCpf] = useState("")
  const [telefone, setTelefone] = useState("")
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState(null)

  async function create(e) {
    e.preventDefault()
    setErro(null)

    if (!nome || !email || !cpf || !telefone) {
      setErro("Preencha todos os campos.")
      return
    }

    const body = { nome, email, cpf, telefone }
    setLoading(true)
    try {
      const response = await fetch('http://localhost:3000/convidados/create', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
      })
      if (!response.ok) throw new Error('Erro ao criar convidado')
      await response.json()
      navigate("/")
    } catch (e) {
      console.error("Erro:", e)
      setErro("Não foi possível criar o convidado. Tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='h-screen w-full flex flex-col justify-center items-center'>
      <div className='w-1/3 min-h-1/3 shadow-2xl flex flex-col items-center rounded-2xl p-5'>
        <h1 className='font-bold text-2xl mt-5'>Criar Convidado</h1>

        {erro && <p className='text-red-500 mt-3 text-sm'>{erro}</p>}

        <div className='flex flex-col w-full mt-5 justify-center items-center'>
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            type="text"
            className='w-full p-2 border rounded-2xl mb-3 placeholder:text-black cursor-pointer'
            placeholder='Nome'
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className='w-full p-2 border rounded-2xl mb-3 placeholder:text-black cursor-pointer'
            placeholder='Email'
          />
          <input
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            type="text"
            className='w-full p-2 border rounded-2xl mb-3 placeholder:text-black cursor-pointer'
            placeholder='CPF'
            maxLength={11}
          />
          <input
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            type="text"
            className='w-full p-2 border rounded-2xl mb-3 placeholder:text-black cursor-pointer'
            placeholder='Telefone'
          />

          <button
            onClick={create}
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

export default Create