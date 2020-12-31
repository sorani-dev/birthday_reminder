import { useState } from 'react';
import './App.css';
import List from './components/List'
import data from './data/data.js'

function App() {
  const [people, setPeople] = useState(data)
  const [numOfPeople, setNumOfPeople] = useState(data.length)

  const clearAll = () => {
    setPeople([])
    setNumOfPeople(0)
  }

  return (
    <main>
      <section className="container">
          <h3>{numOfPeople} birthdays today</h3>
          <List people={people} />
          <button value="Clear All" onClick={clearAll} />
      </section>
    </main>
  );
}

export default App;
