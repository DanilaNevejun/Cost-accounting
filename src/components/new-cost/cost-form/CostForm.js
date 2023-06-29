import { useState } from 'react'
import './CostForm.css'

const CostForm = (props) => {
  const [userInput, setUserInput] = useState({
    inputName: '',
    inputAmount: '',
    inputDate: ''
  })

  const handleNameChange = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      inputName: event.target.value
    }))
  }

  const handleAmountChange = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      inputAmount: event.target.value
    }))
  }

  const handleDateChange = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      inputDate: event.target.value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!userInput.inputName || !userInput.inputAmount || !userInput.inputDate) {
      return
    }

    const costData = {
      description: userInput.inputName,
      amount: userInput.inputAmount,
      date: new Date(userInput.inputDate)
    }

    setUserInput({
      inputName: '',
      inputAmount: '',
      inputDate: ''
    })

    props.onSaveCostData(costData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='new-cost__controls'>
        <div className='new-cost__control'>
          <label htmlFor='nameInput'>Name</label>
          <input
            id='nameInput'
            type='text'
            value={userInput.inputName}
            onChange={handleNameChange}
          />
        </div>
        <div className='new-cost__control'>
          <label htmlFor='amountInput'>Cost</label>
          <input
            id='amountInput'
            type='number'
            value={userInput.inputAmount}
            onChange={handleAmountChange}
            min='0.01'
            step='0.01'
          />
        </div>

        <div className='new-cost__control'>
          <label htmlFor='dateInput'>Date</label>
          <input
            id='dateInput'
            type='date'
            value={userInput.inputDate}
            onChange={handleDateChange}
            min='2019-01-01'
            max='2023-12-31'
          />
        </div>

        <div className='new-cost__actions'>
          <button type='submit'>Add Expense</button>
          <button type='button' onClick={props.onCancel}>Cancel</button>
        </div>
      </div>
    </form>
  )
}

export default CostForm


