import { useState } from 'react'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false)

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
    // hide the form after saving
    setIsEditing(false)
  }

  return (
    <div className='bg-[#a892ee] p-4 my-8 mx-auto w-[50rem] max-w-[95%] rounded-[12px] text-center shadow-lg '>
      {!isEditing && (
        <div>
          <button
            onClick={startEditingHandler}
            className='py-2 px-6 bg-[#40005d] text-white rounded-[8px] hover:bg-[#510674]'
          >
            Add Expense
          </button>
        </div>
      )}

      {isEditing && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />
      )}
    </div>
  )
}

export default NewExpense