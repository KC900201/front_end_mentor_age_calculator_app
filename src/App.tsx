import './App.css'
import { Layout, DateInput, CalculateAgeButton, AgeDisplay } from './components'

function App() {
  return (
    <Layout>
      <DateInput />
      <CalculateAgeButton />
      <AgeDisplay />
    </Layout>
  )
}

export default App
