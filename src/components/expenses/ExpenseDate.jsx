
const ExpenseDate = (props) => {

  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  
  return (
   
      <div className="flex flex-col justify-center items-center size-[5.5rem] border border-[#ececec] border-solid bg-[#2a2a2a] text-white rounded-[12px] ">
        <div className="text-[0.95rem] font-bold">{month}</div>
        <div className="text-[1.1rem]">{year}</div>
        <div className='text-[1.3rem] font-bold'>{day}</div>
      </div>
    
  )
}

export default ExpenseDate