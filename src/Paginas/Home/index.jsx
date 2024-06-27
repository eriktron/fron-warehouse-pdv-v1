
import { useState, useEffect } from "react"
import Layout from "../../Componentes/Layout"
import TablaSimple from "../../Componentes/Tabla"


function Home() {

  const [items, setItems] = useState(null)

  useEffect(()=>{
    fetch('http://localhost:3000/api/w1/categoria')
      // .then(response => console.log(response.json()))
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

    return (
      <Layout>
          Home
          {
            items?.map(item => (
              <li key={item.id}>{item.nombre} {item.descripcion} </li>
            ))
          }
          <TablaSimple />
          
      </Layout>
    )
  }
  
  export default Home