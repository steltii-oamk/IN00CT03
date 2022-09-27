import { useState } from 'react';
import './App.css';

function App() {
  const [eurot, setEurot] = useState(0)
  const [punnat, setPunnat] = useState(0)

  function laske(e) {
    e.preventDefault()
    const tulos = eurot * 0.89
    setPunnat(tulos)
  }

  return (
    <div id="content">
      <h3>Valuuttalaskuri</h3>
      <form onSubmit={laske}>
        <div>
          <label>Eurot</label>
          <input type="number" value={eurot} onChange={e => setEurot(e.target.value)} />
        </div>
        <div>
          <label>Punnat</label>
          <output>{punnat}</output>
        </div>
        <button>Laske</button>
      </form>
    </div>
  );
}

export default App;
