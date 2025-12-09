import {useState} from 'react'

const ExpenseForm = (props) => {

    const [enteredTitle , setEnteredTitle] = useState('')
    const [enteredAmount , setEnteredAmount] = useState('')
    const [enteredDate , setEnteredDate] = useState('')

    // const [userInput,setUserInput] = useState({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : '' 
    // })

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value)
        // setUserInput({
        //     ...userInput ,
        //     enteredTitle : event.target.value
        // })
    }

    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput ,
        //     enteredAmount : event.target.value
        // })
    }

    const dateChangeHandler= (event) =>{
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput ,
        //     enteredDate : event.target.value
        // })
    }

    const submitHandler = (event) =>{
        event.preventDefault()

        const expenseData = {
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }


  return (
    <form action="" onSubmit={submitHandler}>
        <div className='flex flex-wrap gap-4 mb-4 text-left'>
            <div className=''>
                <label htmlFor="" className='font-bold mb-[0.5rem] block'>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} className=' p-[0.5rem] border-[1px] border-solid border-[#ccc] rounded-[6px] w-[20rem] max-w-full' />
            </div>
            <div>
                <label htmlFor="" className='font-bold mb-[0.5rem] block'>Amount</label>
                <input type="number" value={enteredAmount} onChange={amountChangeHandler} min='1' step='1' className=' p-[0.5rem] border-[1px] border-solid border-[#ccc] rounded-[6px] w-[20rem] max-w-full' />
            </div>
            <div className='new expense control'>
                <label htmlFor="" className='font-bold mb-[0.5rem] block'>Date</label>
                <input type="date" value={enteredDate} onChange={dateChangeHandler} min='2019-01-01' max='2022-12-31' className=' p-[0.5rem] border-[1px] border-solid border-[#ccc] rounded-[6px] w-[20rem] max-w-full'/>
            </div>
        </div>

        <div className='flex justify-end gap-4 py-4'>
            <button type='button' onClick={props.onCancel} className='px-4 py-2 border rounded-[8px]'>Cancel</button>
            <button type='submit' className='px-4 py-2 bg-[#40005d] text-white rounded-[8px] hover:bg-[#510674]'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm



