import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Create() {
  const navigate = useNavigate()
  const [nome, SetNome] = useState("")
  const [email, SetEmail] = useState("")
  const [cpf, SetCpf] = useState("")
  const [telefone, SetTelefone] = useState("")

  const body = { nome: nome, email: email, cpf: cpf, telefone: telefone }

  async function create() {
    try {
      const response = await fetch('http://localhost:3000/convidados/create', {
        method: 'post',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response.json();
    } catch (e) {
      console.log("err", e)
    }
  }



  return (
    <div className='h-screen w-full flex flex-col justify-center items-center'>
      <div className='w-1/3 min-h-1/3 shadow-2xl  flex flex-col  items-center rounded-2xl p-5'>
        <h1 className='font-bold text-2xl mt-5'>Criar o convidado </h1>
        <form action="" className=' flex flex-col w-full mt-5 justify-center items-center'>
          <input value={nome} onChange={(e) => SetNome(e.target.value)} type="text" className='w-full p-2 border rounded-2xl mb-3 placeholder:text-black cursor-pointer' placeholder='Nome' />
          <input value={email} onChange={(e) => SetEmail(e.target.value)} type="text" className='w-full p-2 border rounded-2xl mb-3 placeholder:text-black cursor-pointer' placeholder='Email' />
          <input value={cpf} onChange={(e) => SetCpf(e.target.value)} type="text" className='w-full p-2 border rounded-2xl mb-3 placeholder:text-black cursor-pointer' placeholder='Cpf' />
          <input value={telefone} onChange={(e) => SetTelefone(e.target.value)} type="text" className='w-full p-2 border rounded-2xl mb-3 placeholder:text-black cursor-pointer' placeholder='Telefone' />

          <button onClick={create} className='w-1/2 bg-blue-400 p-2 rounded-3xl text-white mb-3'>Enviar</button>
        </form>
        <p className='text-blue-500 hover cursor-pointer' onClick={() => navigate("/")}> Voltar a pagina inicial</p>
      </div>
    </div>
  )
}

export default Create