import {useEffect,  useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './SearchBar'
import CardBoard from './CardBoard'
import CreateCardModal from './CreateCardModal'
import CardOpen from './CardOpen'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; /* navigate page*/
function App() {
  const [isCardCreatorOpen, setIsCardCreatorOpen] = useState(false);


  return (
    <Router>
      <header className="header">
      <h1 className="title">Kudosboard</h1>
      <SearchBar setIsCardCreatorOpen={setIsCardCreatorOpen}/>
      


      </header>

      <CreateCardModal isCardCreatorOpen={isCardCreatorOpen} setIsCardCreatorOpen={setIsCardCreatorOpen}/>

      <div className="card">

      <Switch>
        <Route exact path='/'>
        <CardBoard/>
        </Route>
        
        <Route path='/details/:id'>
        <CardOpen/>
        </Route>

      </Switch>

      </div>
  
    </Router>
  )
}

export default App
