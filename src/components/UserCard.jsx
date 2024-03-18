const UserCard = ({user,setEditUser, setModal,setDeleteTheUser,setDeleteModal}) => {
    const handleDelete = () => {
        setDeleteTheUser(user)
        setDeleteModal(true)
    }
    const handleEdit = () => {
        setEditUser(user)
        setModal(false)
    }
    return (<article className=" border  max-w-[300px] min-w-[300px] max-h-[500px] px-1 py-2 shadow rounded-md">
        <h2 className=" text-base text-center font-bold">{`${user.first_name} ${user.last_name}`}</h2>
        <ul className=" border [&>li]:flex [&>li]:flex-col py-2 px-3 ">
            <li><span className=" text-gray-400">CORREO</span><span>{user.email}</span></li>
            <li><span className=" text-gray-400">CUMPLEAÑOS</span><span><i className='bx bx-gift'></i> {user.birthday|| `AAAA/MM/DD`}</span></li>
            <li><span className="text-gray-400">IMAGEN DE USUARIO</span> <img className=" w-10 h-10 rounded-full" src={user.image_url? user.image_url:`/userImg.png`} alt={user.id} /></li>
        </ul>
        <div className=" flex justify-end items-center space-x-3">
        <button className=" bg-red-400 hover:bg-red-500 shadow text-white rounded-xl text-sm px-2 py-1 mt-1 w-auto flex items-center gap-2" onClick={handleDelete}><i className='bx bxs-trash text-xl '></i></button>
        <button className=" bg-gray-400 shadow hover:bg-gray-500 text-white rounded-xl text-sm px-2 py-1 mt-1 w-auto flex items-center gap-2" 
          onClick={handleEdit}><i className='bx bxs-edit-alt text-xl '></i></button>
        </div>
        
    </article>);
}

export default UserCard;