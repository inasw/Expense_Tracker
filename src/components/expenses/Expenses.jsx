import ExpenseItem from './ExpenseItem'

const Expenses = (props) => {
  return (
    <div className='bg-[#0e0d0d] border m-20 p-10 rounded-xl'>
      <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>
      <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
      <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>
      <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}/>
    </div>
  )
}

export default Expenses