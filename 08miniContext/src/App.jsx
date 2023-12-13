
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <div>
    <UserContextProvider >
      <h1>React with Chai!!!</h1>
      <Login />
      <Profile />
    </UserContextProvider>
    </div>
  )
}

export default App