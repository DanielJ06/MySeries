import React from 'react';

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
        <Form />
      </aside>
      <main>
        <Item />
      </main>
    </div>
  );
}

export default App;
