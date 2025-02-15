
import './App.css'
import Prova from './components/Prova'
import Saudacao from './components/Saudacao'
import Preco from './components/Preco'
function App() {
    
  return (
    <>
      <h1>Teste</h1>
      <p>Olá mundo</p>
      <Prova/>
      <Saudacao nome="Pedro" idade={10+10} curso="React"/>
      <Preco/>
    </>
  )
}

export default App
