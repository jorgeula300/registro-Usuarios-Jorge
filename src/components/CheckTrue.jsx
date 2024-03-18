const CheckDelete = ({ checkTrue, modalTextConfirm }) => {
    return (<div className={` fixed ${checkTrue && 'hidden'}  bottom-2 right-2 flex justify-between w-[280px]  items-center h-10 shadow shadow-black`}>
        <span className=" bg-green-600 w-2 h-full"></span>

        <div className=" flex justify-center items-center">
            <i className='bx bxs-check-circle text-green-600 text-2xl'></i>
            <h2 className=" text-xl font-semibold  ">{modalTextConfirm}</h2>
        </div>

        <span className=" bg-green-600 w-2 h-full"></span>
    </div>);
}

export default CheckDelete;