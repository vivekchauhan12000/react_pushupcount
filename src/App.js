import React,{useState} from 'react';

import './App.css';

function App() {
  const [count,setcount]=useState(0);
  return (
    <div className="App">
      <h1>
        Push UP</h1>
        <h2>
        count:{count}

      </h2>
      <button className ="btn-floating btn-large waves-effect waves-light red" onClick={()=>setcount(count+1)}>+</button>
    </div>
  );
}

export default App;
