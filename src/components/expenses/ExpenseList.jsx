import ExpenseItem from "./ExpenseItem"
const ExpenseList = (props) => {
   
    if (props.items.length === 0){
        return <h2 className='text-center mb-4'>Found no expenses</h2>
    }

  return (
    <ul className="list-none p-6">
      {
        props.items.map((expense)=>(
            <ExpenseItem key={expense.id} title={expense.title} amount = {expense.amount} date = {expense.date}/>
            ))
      }
    </ul>
  )
}

export default ExpenseList
