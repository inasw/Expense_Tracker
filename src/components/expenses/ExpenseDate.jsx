
const ExpenseDate = (props) => {

  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  
  return (
   
      <div className="text-white bg-[#2b2b2b] text-2xl border-[3px] px-5">
        <div>{month}</div>
        <div>{year}</div>
        <div className=''>{day}</div>
      </div>
    
  )
}

export default ExpenseDate