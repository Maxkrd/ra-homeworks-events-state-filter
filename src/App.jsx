import './App.css'
import { listCard } from './data/listCard'
import { Portfolio } from './components/Portfolio'
const data = {
    filters: ["All", "Websites", "Flayers", "Business Cards"],
    projects: listCard
}

function App() {
  return (
    <>
        <Portfolio data={data}/>
    </>
  )
}

export default App
