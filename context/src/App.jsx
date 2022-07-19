import './App.css'
import Second from './Second'
import UserContext from './UserContext'

function App() {

  const user = { name: 'foo', occupation: 'developer' }

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Second />
      </UserContext.Provider>
    </div>
  )
}

export default App
