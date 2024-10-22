import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  const [titulo, setTitulo] = useState("")
  const [like, setLike] = useState()
  const [textcarac, setTextcarac] = useState('')
  const contCaracter = (event) => {
    setTextcarac(event.target.value);
  }

  const Change = (Event) => {
    setTitulo(Event.target.value);
  }

  const [name, setName] = useState("MeteuWarThunder")
  const [idade, setIdade] = useState(17)
  const [email, setEmail] = useState("MeteuGaijinOficial@gmail.com")
  

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



     
      <div className='Texto'>
        <textarea name="" 
        cols="50" 
        rows="10"
        placeholder="Digite um texto:"
        value={textcarac}
        onChange={contCaracter}
        style={{ resize: 'none' }}>
        </textarea>
      </div>

      <div style={{ marginTop: '10px' }}>
        <strong>Quantidade de caracteres: {textcarac.length}</strong>
      </div>
      




      <div>
      <input value={name} onChange={e => setName(e.target.value)} placeholder='informe seu nome' /><br></br>
        <input value={idade} onChange={e => setIdade(e.target.value)} placeholder='informe sua idade' /><br></br>
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder='informe seu email' /><br></br>
        
        <button onClick={() => setIdade(age + 1)}>
          
        </button>
      </div>
    </>



  )
}

export default App
