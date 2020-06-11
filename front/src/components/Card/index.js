import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';

import { CardContainer, List } from './styles';
import api from '../../services/api';

function Card() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    async function loadSeries() {
      const res = await api.get('/serie');

      setSeries(res.data);
    }
    loadSeries();
  }, [series])

  async function handleDeleteSerie(id) {
    try {
      await api.delete(`/serie/${id}`)
    } catch(err) {
      alert(err)
    }
  }

  return (
    <List>
      {series.map(serie => (
        <CardContainer className="serie-item" key={serie._id}>
          <header>
            <div className="user-info">
              <strong>{serie.name}</strong>
              <span>#{serie.status}</span>
            </div>
            <div>
              <Link
                to={{
                  pathname: "/edit",
                  state: {
                    from: serie
                  }
                }}
              >
                <FaPencilAlt size={16} color='#999' />
              </Link>
              <button type="button" onClick={() => handleDeleteSerie(serie._id)} >
                <FaTrash size={16} color='#999' />
              </button>
            </div>
          </header>
          <p>{serie.bio}</p>
        </CardContainer>
      ))}
    </List>
  );
}

export default Card;
