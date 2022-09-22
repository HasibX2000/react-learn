// import logo from './logo.svg'
import './App.css'

export default function App() {
  const heros = [
    'Scarlet Brooks',
    'Kieran Huynh',
    'Gavin Wolf',
    'Cindy Faulkner',
    'Cierra Acevedo',
    'Mckenna Cardenas',
    'Caden Yu',
    'Hayden Estrada',
    'Ralph Wright',
    'Jaylah Rasmussen',
    'Kayden Velazquez',
    'Claire Montoya',
  ]
  const products = [
    { name: 'Adobe Photoshop', price: '$12.99' },
    { name: 'Adobe Illustrator', price: '$9.99' },
    { name: 'Adobe XD', price: '$7.99' },
    { name: 'Adobe Indesigns', price: '$7.99' },
    { name: 'Adobe Dreamweaver', price: '$7.99' },
    { name: 'Adobe Premier Pro', price: '$7.99' },
    { name: 'Adobe After Effects', price: '$7.99' },
    { name: 'Adobe Media Encoder', price: '$7.99' },
  ]
  return (
    <header className="App-header">
      {/* 
      individual
      <Products name={products[0].name} price={products[0].price}></Products> */}
      {/* <Products product={products[1]}></Products>
      <Products product={products[2]}></Products> */}

      {/* <ul>
        {heros.map((hero) => (
          <li>{hero}</li>
        ))}
      </ul> */}

      {products.map((items) => (
        <Products product={items}></Products>
      ))}
    </header>
  )
}

function Products(dataPass) {
  const productStyle = {
    width: '250px',
    border: '5px ridge green',
    margin: '20px',
    padding: '10px',
    textAlign: 'center',
    borderRadius: '7px',
    boxShadow: '0 0 10px #000000',
    backgroundColor: '#25382E',
  }
  const buttonStyle = {
    padding: '5px 10px',
    backgroundColor: 'limegreen',
    border: 'none',
    borderRadius: '3px',
    color: '#ffffff',
  }
  const { name, price } = dataPass.product
  return (
    <div style={productStyle}>
      {/* 
      for individual
      <h3> {dataPass.name}</h3>
      <h4>{dataPass.price}</h4>   */}
      <h3> {name}</h3>
      <h4>{price}</h4>
      <button style={buttonStyle}>Buy Now</button>
    </div>
  )
}

// function App() {
//   const pNames = [
//     'Yeamin Adib',
//     'Rajen Shikder',
//     'Prayangshu',
//     'Jewel Boss',
//     'Habibur Don',
//     'Moshiur RunOut',
//   ]
//   const loves = ['Nafisa', 'Maisha', 'Sadia', 'Jannat', 'Sumaiya', 'Mim']
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Componentx name={pNames[0]} loves={loves[0]}></Componentx>
//         <Componentx name={pNames[1]} loves={loves[1]}></Componentx>
//         <Componentx name={pNames[2]} loves={loves[2]}></Componentx>
//         <Componentx name={pNames[3]} loves={loves[3]}></Componentx>
//         <Componentx name={pNames[4]} loves={loves[4]}></Componentx>
//         <Componentx name={pNames[5]} loves={loves[5]}></Componentx>
//       </header>
//     </div>
//   )
// }
// function Componentx(dataPass) {
//   const compX = {
//     border: '2px solid #ecf0f1',
//     padding: '5px',
//     margin: '20px',
//     fontSize: '15px',
//     borderRadius: '10px',
//     width: '500px',
//     boxShadow: '0 0 10px #fafafa',
//   }
//   const compXName = {
//     color: '#f1c40f',
//   }

//   return (
//     <div style={compX}>
//       <p style={compXName}>
//         {dataPass.name} X {dataPass.loves}
//       </p>
//       {/* <p style={compXAddress}>Address : {dataPass.address} </p> */}
//     </div>
//   )
// }

// export default App

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
