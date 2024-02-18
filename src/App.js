import axios from 'axios';
import './output.css'
import React from 'react';

function App() {
  const [input, setInput] = React.useState('')
  const [data, setData] = React.useState('')

  const handleClick = (e) => {
    console.log(JSON.stringify({
      name: "ghyg",
      email: input
    }))
    fetch('http://127.0.0.1:5000/process', {
      method: 'POST',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "ghyg",
        email: input
      })
    }).then((res) => res.json())
    .then(x => setData(x))
  }

    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', flexDirection: 'column' }}>
        <h1 className="" style={{ fontSize: '40px', fontWeight: 'bold' }}>Enter Prompt</h1>
        <br />
          <textarea type="text" style={{ borderWidth: 2, borderColor: "#000000", borderRadius: '10px', fontSize: '20px', padding: '5px' }} value={input} onInput={e => setInput(e.target.value)} />
          <span onClick={handleClick} style={{ backgroundColor: '#00aaff', padding: '13px', fontSize: '20px', borderRadius: '10px', marginTop: '9px' }}>Search</span>
          <div style={{ width: '40%', marginTop: '30px' }}>{JSON.stringify(data)}</div>
      </div>
    );
}

export default App;
