import './App.css';
import Luz from './Componentes/luz.jsx'
import { useState } from 'react'

function App() {

  const [color, setColor] = useState('')

  const colorChange = (color) => {
    setColor(color)
  }
  


  return (
    <div className="App">
      <div className='contenedor-semaforo'>
        <div className='divTop'></div>
        <div className='container'>
          <Luz 
          className={'red ' + (color == 'red' ? 'redOn' : '')  }
          colorChange = {colorChange} 
          color={"red"} />
           <Luz 
          className={'yellow ' + (color == 'yellow' ? 'yellowOn' : '')  }
          colorChange = {colorChange} 
          color={"yellow"} />
           <Luz 
          className={'green ' + (color == 'green' ? 'greenOn' : '')  }
          colorChange ={colorChange} 
          color={"green"} />
        </div>
      </div>
    </div>
  );
}

export default App;
