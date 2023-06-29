import { useState } from 'react'
import Costs from './components/costs/costs/Costs'
import NewCost from './components/new-cost/new-cost/NewCost'

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2022, 4, 23),
    description: 'Fridge',
    amount: 999.99
  },
  {
    id: 'c2',
    date: new Date(2022, 11, 25),
    description: 'MacBook',
    amount: 1254.99
  },
  {
    id: 'c3',
    date: new Date(2022, 4, 2),
    description: 'Jeans',
    amount: 999.99
  }
]

const App = () => {

  const [costs, setCosts] = useState(INITIAL_COSTS)

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    })
  } 

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs} />
    </div>
  )
}

export default App
