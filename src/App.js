import './App.css';
import List from './components/List'
import data from './data/data.js'

function App() {
  return (
    <main>
      <section className="container">
          <h3>{data.length} birthdays today</h3>
          <List people={data} />
      </section>
    </main>
  );
}

export default App;
