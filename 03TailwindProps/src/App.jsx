import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/Card'


function App() {

  let myObj = {
    username: "Anurag",
    age: 21
  }
  let newArr = [1,2,3]

  return (
    <>

    <h1 className= "bg-green-400 text-black rounded-md  text-3xl font-bold underline">Chai aur React!
    </h1>
    <Card user="Anurag" btnText="Click me" />
    <Card user="Chai aur React!" btnText="visit me"/>
    </>
  )
}

export default App
