import { useState } from 'react'

import './App.css'
import { Istate } from './types'
import List from './components/List'
import Inputfield from './components/Inputfield'

function App() {
  const [people, setpeople] = useState<Istate["people"]>([{
    name:'mohit',
    url:"https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg",
    age:0,
   notes:"hhj", 
  }])

  return (
    <>
      <h1>App</h1>
      <List people={people}/>
      <Inputfield people={people} setpeople={setpeople}/>
    </>
  )
}

export default App
