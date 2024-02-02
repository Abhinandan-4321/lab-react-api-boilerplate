import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState([])

  useEffect(()=>{axios.get("https://reactnd-books-api.udacity.com/books", {headers:{"Authorization":"Key"}})
  .then((res)=> setData(res.data.books))
  .catch((err)=>console.log("Error"))})
  
  return (
    <>
      <div>
        {data.map((el)=>{
          return (
            <div key={el.id}>
              <h3 style={{
                textAlign:'left'
              }} >{el.title}</h3>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems : 'center'
              }}>
              <img style={{
                width: '13%'
              }} src={el.imageLinks.thumbnail}/>
              <p style={{
                width:'84%',
                textAlign: 'left'
              }}>{el.description}</p>
              </div>
              <h4 style={{
                textAlign:'left'
              }}>{el.authors}</h4>
              <hr />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
