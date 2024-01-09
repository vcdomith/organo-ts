import './Banner.css'

import React from 'react'

interface BannerProps {
    endereco: string
    textoAlternativo?: string
}

export const Banner = ({ endereco, textoAlternativo }:BannerProps) => {
    // JSX
    return (
        <header className="banner">
            <img 
                src={endereco} 
                alt={textoAlternativo}
            />
        </header>
    )
}

export default Banner