// import logo from './logo.svg'
import './App.css'

function App() {
  const pNames = [
    'Yeamin Adib',
    'Rajen Shikder',
    'Prayangshu',
    'Jewel Boss',
    'Habibur Don',
    'Moshiur RunOut',
  ]
  const loves = ['Nafisa', 'Maisha', 'Sadia', 'Jannat', 'Sumaiya', 'Mim']
  return (
    <div className="App">
      <header className="App-header">
        <Componentx name={pNames[0]} loves={loves[0]}></Componentx>
        <Componentx name={pNames[1]} loves={loves[1]}></Componentx>
        <Componentx name={pNames[2]} loves={loves[2]}></Componentx>
        <Componentx name={pNames[3]} loves={loves[3]}></Componentx>
        <Componentx name={pNames[4]} loves={loves[4]}></Componentx>
        <Componentx name={pNames[5]} loves={loves[5]}></Componentx>
      </header>
    </div>
  )
}
function Componentx(dataPass) {
  const compX = {
    border: '2px solid #ecf0f1',
    padding: '5px',
    margin: '20px',
    fontSize: '15px',
    borderRadius: '10px',
    width: '500px',
    boxShadow: '0 0 10px #fafafa',
  }
  const compXName = {
    color: '#f1c40f',
  }

  return (
    <div style={compX}>
      <p style={compXName}>
        {dataPass.name} X {dataPass.loves}
      </p>
      {/* <p style={compXAddress}>Address : {dataPass.address} </p> */}
    </div>
  )
}

export default App

// Old 1
// function Person() {
//   return (
//     <div
//       style={{
//         border: '3px solid yellow',
//         width: '450px',
//         padding: '10px',
//         margin: '10px',
//       }}
//     >
//       <h3>This is this components title</h3>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sunt
//         exercitationem qui eos! Suscipit mollitia, magnam corrupti labore aut ab
//         error maxime quo quas earum veritatis, nihil nam, aliquam voluptas.
//       </p>
//     </div>
//   )
// }

// function Componentx() {
//   const compX = {
//     border: '3px groove red',
//     width: '450px',
//     padding: '10px',
//     margin: '10px',
//   }
//   return (
//     <div style={compX}>
//       <h3>This is this components title</h3>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sunt
//         exercitationem qui eos! Suscipit mollitia, magnam corrupti labore aut ab
//         error maxime quo quas earum veritatis, nihil nam, aliquam voluptas.
//       </p>
//     </div>
//   )
// }
