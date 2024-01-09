import './Botao.css'

import React from 'react'

interface BotaoProps {
    children: React.ReactNode
}

const Botao = (props: BotaoProps) => {
    return (
    <button 
        className='botao'
    >
        {props.children}
    </button>
    )
}

export default Botao