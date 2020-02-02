import React, { useState, useEffect } from 'react';

//import api from './services/api'

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

import Form from './components/Form';
import Item from './components/Item';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Adicionar Série</strong>
        <Form/>
      </aside>
      <main>
          <ul>
            <Item />
            <Item />
          </ul>
      </main>
    </div>
  );
}

export default App;
