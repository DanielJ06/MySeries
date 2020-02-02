import React from 'react'

import './styles.css';

function Item() {
    return (
        <li className="serie-item">
            <header>
                <div className="user-info">
                    <strong>Friends</strong>
                    <span>Já assisti</span>
                </div>
            </header>
            <p>Assisti na Netflix, achei muito boa</p>
        </li>
    )
}

export default Item