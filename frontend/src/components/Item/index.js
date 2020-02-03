import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import './styles.css';

export default function Item() {
    const [series, setSeries] = useState([])

    useEffect(() => {
        async function loadSeries(){
            const res = await api.get('/')

            setSeries(res.data)
        }
        loadSeries()
    }, [])

    return (
        <div>
            <ul>
                {
                    series.map(serie => (
                        <li className="serie-item" key={serie._id}>
                            <header>
                                <div className="user-info">
                                    <strong>{serie.name}</strong>
                                    <span>{serie.status}</span>
                                </div>
                            </header>
                            <p>{serie.bio}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
 