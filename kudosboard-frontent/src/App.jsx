import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './SearchBar'
import CardBoard from './CardBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <header>
      <h1>Kudosboard</h1>
      <SearchBar/>
      </header>
      
      <div className="card">
      <CardBoard/>
       
      </div>
  
    </>
  )
}

export default App
