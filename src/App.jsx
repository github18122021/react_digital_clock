
import './App.css'

import {useState} from 'react';



function App() {
  let [date, setDate] = useState(new Date());

  setInterval(()=> {
    setDate(new Date());
  }, 1000);

  console.log(new Date());

  let displayDate = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
  return (
    <section className='date'>
      <h1>Digital Clock</h1>
      <h2>{displayDate}</h2>
    </section>
  )
}

export default App
