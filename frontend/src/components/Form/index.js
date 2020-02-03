import React from 'react'

function Form() {
  return (
        <form>
        
        <div className="input-block">
          <label htmlFor="name">Nome:</label>
          <input name="name" id="name" type="text" required/>
        </div>

        <div className="input-block">
          <label htmlFor="status">Status:</label>
          <select name="status" id="status">
            <option value="to-watch">Para assistir</option>
            <option value="watching">Assistindo</option>
            <option value="watched">Já assisti</option>
          </select>
        </div>  

        <div className="input-block">
          <label htmlFor="name">Pequena descrição:</label>
          <input name="desc" id="desc" type="text" required/>
        </div>

        <button type="submit">Salvar</button>
      </form>
    )
}

export default Form