import { useState } from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState(0)
  const [upper, setUpper] = useState(0)
  const [lower, setLower] = useState(0)

  function laske(e) {
    e.preventDefault()
    const upper = (220-age)*0.85
    const lower = (220-age)*0.65
    setUpper(upper)
    setLower(lower)
  }

  return (
    <div id="content">
      <h1>Heart rate limits calculator</h1>
      <form onSubmit={laske}>
        <div id="form_age">
          <label>Age</label>
          <input type="number" value={age} onChange={e => setAge(e.target.value)} />
        </div>
        <div id="form_rate">
          <label>Heart rate limits</label>
          <output>{lower}-{upper}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
