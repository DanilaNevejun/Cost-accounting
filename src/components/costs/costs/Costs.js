import React, { useState } from 'react'
import './Costs.css'
import Card from '../../ui/card/Card'
import CostsFilter from '../costs-filter/CostsFilter'
import CostList from '../cost-list/CostList'
import CostsDiagram from '../costs-diagram/CostsDiagram'

const Costs = (props) => {

  const [selectedYear, setSelectedYear] = useState('2023')

  const yearChangeHandler = (year) => {
    setSelectedYear(year)
  }

  const filteredCosts = props.costs.filter(cost => {
    return cost.date && cost.date.getFullYear().toString() === selectedYear
  })

  return (
    <>
      <Card className='costs'>
        <CostsFilter
          year={selectedYear}
          onChangeYear={yearChangeHandler} />

        <CostsDiagram costs={filteredCosts} />

        <CostList costs={filteredCosts} />
      </Card>
    </>
  )
}

export default Costs