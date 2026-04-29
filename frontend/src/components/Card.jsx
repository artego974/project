import React from 'react'

function Card() {
    const convidados = [
        { nome: "Arthur", email: "arthur@gmail.com", cpf: "12345678901", telefone: "5198765432", data: "2026/06/06" },
        { nome: "Arthur", email: "arthur@gmail.com", cpf: "12345678901", telefone: "5198765432", data: "2026/06/06" },
        { nome: "Arthur", email: "arthur@gmail.com", cpf: "12345678901", telefone: "5198765432", data: "2026/06/06" },
        { nome: "Arthur", email: "arthur@gmail.com", cpf: "12345678901", telefone: "5198765432", data: "2026/06/06" },
    ]

    const listConvidados = convidados.map((con) => {
        return (
            <div className=' w-1/3 rounded-2xl shadow-2xl flex flex-col min-h-1/4 mb-10'>
                <div className='flex justify-center'>
                    <h2 className='text-3xl font-bold'>{con.nome}</h2>
                </div>
                <div className='flex justify-center p-4 flex-col '>
                    <p>Email:{con.email}</p>
                    <p>Cpf:{con.cpf}</p>
                    <p>Telefone:{con.telefone}</p>
                    <p>Data:{con.data}</p>
                </div>
            </div>
        )

    })
    return (
        <>
            {listConvidados}
        </>
    )
}

export default Card