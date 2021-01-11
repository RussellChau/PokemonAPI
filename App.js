import React,{useState} from 'react';
import Dex from "./components/Dex";

function App() {
  const [showDex,setShowDex] = useState(false);

  const onClick = () => {
    setShowDex(true);
  }
  
  return (
    <div>
      <button onClick={onClick}>Fetch Pokemon</button>
      <Dex showDex={showDex}/>
    </div>
  );
};

export default App;
