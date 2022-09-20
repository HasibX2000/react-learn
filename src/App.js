import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Understanding React Component</p>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Componentx></Componentx>
        <Componentx></Componentx>
        <Componentx></Componentx>
        <Componentx></Componentx>
      </header>
    </div>
  )
}
function Person() {
  return (
    <div
      style={{
        border: '3px solid yellow',
        width: '450px',
        padding: '10px',
        margin: '10px',
      }}
    >
      <h1>This is this components title</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sunt
        exercitationem qui eos! Suscipit mollitia, magnam corrupti labore aut ab
        error maxime quo quas earum veritatis, nihil nam, aliquam voluptas.
      </p>
    </div>
  )
}

function Componentx() {
  const compX = {
    border: '3px groove red',
    width: '450px',
    padding: '10px',
    margin: '10px',
  }
  return (
    <div style={compX}>
      <h1>This is this components title</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sunt
        exercitationem qui eos! Suscipit mollitia, magnam corrupti labore aut ab
        error maxime quo quas earum veritatis, nihil nam, aliquam voluptas.
      </p>
    </div>
  )
}

export default App
