import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  const [titulo, setTitulo] = useState("")
  const [like, setLike] = useState()

  const Change = (Event) => {
    setTitulo(Event.target.value);
  };

  return (
    <>
      <button onClick={() => setCount((count) => count + 10)}>
        Botão para + {count}
      </button>

      <button onClick={() => setCount((count) => count - 10)}>
        Botão para - {count}
      </button>

      <button onClick={() => setCount((count) => count = 0)}>
        Restart {count}
      </button>



      <div>
        <button onClick={() => setText(("balacobaco"))}>
          Aparecer título {text}
        </button>

        <button onClick={() => setText((text) => text = "")}>
          Apagar {text}
        </button>
      </div>


      <div>
        <h1>Digite "Senai"</h1>
        <input type="text"
          value={titulo}
          onChange={Change}
        />
        <p>Texto: {titulo}</p>


      </div>
      {titulo === "Senai" ? <h1>Apareci!</h1> : <h1>Escondi</h1>}



      <button onClick={() => setLike(("❤" + 1))}>
        Dar um like {like}
      </button>

      <button onClick={() => setLike(("❤" + 0))}>
        Tirar o like {like}
      </button>




    </>


    
  )
}

export default App
