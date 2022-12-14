import './styles/main.css';
import logoImg from './assets/logo-nlw-esports.svg';
import Games from './components/Games'
import Card from './components/Card'

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>

      <Games/>
      <Card/>
     
    </div>
  )
}

export default App
