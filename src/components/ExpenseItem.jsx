
const ExpenseItem = () =>{
    return(
        <div className='flex justify-between items-center shadow shadow-white opacity-[25%] p-0.5 my-4 rounded-[12px] bg-[#4b4b4b]'>
            <div>March 28th 2021</div>
            <div className='flex flex-col gap-4 items-end justify-start' >
                <h2 className='text-[ #3a3a3a] text-base margin'>Car Insurance</h2>
                <div>255birr</div>
            </div>

        </div>
    )
}

export default ExpenseItem