import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './SearchBar'
import CardBoard from './CardBoard'
import CreateCardModal from './CreateCardModal'
import { BrowserRouter as Router } from 'react-router-dom'; /* navigate page*/
function App() {
  const [isCardCreatorOpen, setIsCardCreatorOpen] = useState(false);

  return (
    <Router>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <header className="header">
      <h1 className="title">Kudosboard</h1>
      <SearchBar setIsCardCreatorOpen={setIsCardCreatorOpen}/>
      </header>
      <CreateCardModal isCardCreatorOpen={isCardCreatorOpen} setIsCardCreatorOpen={setIsCardCreatorOpen}/>

      <div className="card">
      <CardBoard/>
       
      </div>
  
    </Router>
  )
}

export default App
