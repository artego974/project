import React from 'react'

function Card({ convidados }) {
    if (!convidados || convidados.length === 0) {
        return <p className="text-center text-gray-400 w-full mt-10">Nenhum convidado encontrado.</p>
    }

    return (
        <>
            {convidados.map((con) => (
                <div key={con.id} className='w-1/3 rounded-2xl shadow-2xl flex flex-col min-h-1/4 mb-10 mx-2'>
                    <div className='flex justify-center pt-4'>
                        <h2 className='text-3xl font-bold'>{con.nome}</h2>
                    </div>
                    <div className='flex justify-center p-4 flex-col'>
                        <p><span className='font-semibold'>Email:</span> {con.email}</p>
                        <p><span className='font-semibold'>CPF:</span> {con.cpf}</p>
                        <p><span className='font-semibold'>Telefone:</span> {con.telefone}</p>
                        {con.data && <p><span className='font-semibold'>Data:</span> {con.data}</p>}
                    </div>
                </div>
            ))}
        </>
    )
}

export default Card