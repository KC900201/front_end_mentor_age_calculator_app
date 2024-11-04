import "./App.css"
import { Layout, DateInput, CalculateAgeButton, AgeDisplay } from "./components"

// To-do: migrate hooks and validation logic to this component
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
