import React, { useState, useEffect } from 'react';

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
  }, [])

  return (
    <List>
      {series.map(serie => (
        <CardContainer className="serie-item" key={serie._id}>
          <header>
            <div className="user-info">
              <strong>{serie.name}</strong>
              <span># {serie.status}</span>
            </div>
          </header>
          <p>{serie.bio}</p>
        </CardContainer>
      ))}
    </List>
  );
}

export default Card;
