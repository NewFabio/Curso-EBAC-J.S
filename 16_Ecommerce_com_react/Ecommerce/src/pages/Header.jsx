import React from 'react'
// CSS


function Header() {
    
    return (
        <header className="header">
            <div className='logo'>
                <a href="#">Dev Curso</a>
            </div>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="contato.html">Contatoo</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header