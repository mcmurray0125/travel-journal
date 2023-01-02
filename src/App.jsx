import React from 'react'
import Card from './components/Card'
import Navbar from "./components/Navbar"
import data from './data'

function App() {

  const cardElements = data.map(item => {
    return (
      <Card
          key={item.id}
          item={item}
          />
    )
  })

  return (
    <div>
      <Navbar/>
      <section className='cards-container'>
        {cardElements}
      </section>
    </div>
  )
}

export default App
