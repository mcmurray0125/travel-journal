import React from 'react'
import Card from './components/Card'
import Navbar from "./components/Navbar"
import data from './data'

function App() {
  //Render a HR unless it is the last in the array.
  function renderHR(items, index) {
    if (index !== items.length - 1) {
      return <hr />;
    }
    return null;
  }

  const cardElements = data.map((item,index) => {
    return (
      <div key={item.id}>
        <Card
            key={item.id}
            item={item}
            />
            {renderHR(data, index)}
      </div>
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
