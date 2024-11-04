import "./App.css"
import { Layout, DateInput, CalculateAgeButton, AgeDisplay } from "./components"

/* To-do:
    1. migrate hooks and validation logic to this component
    2. Add in props for each child component interface (new)
    3. Add in error message for each validation failure in UI layout
    4. Deploy to netlify once 1~3 are completed
    5. (Optional) add in mobile design layout
*/

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
