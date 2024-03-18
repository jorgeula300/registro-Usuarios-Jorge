const DeleteUser = ({ deleteTheUser,deleteUser,deleteModal,setDeleteModal,setDeleteTheUser,setCheckTrue,setrModalTextConfirm }) => {
    const handleDelete = () => {
        deleteUser('users/',deleteTheUser.id)
        setDeleteTheUser()
        setrModalTextConfirm('Usuario eliminado')
        setCheckTrue(false)
        setDeleteModal(false)
    }

    const handleClose = () => {
        setDeleteTheUser()
        setDeleteModal(false)
    }

    return (<div className={`${!deleteModal&& 'hidden'} fixed  top-0 left-0 w-full min-h-[100vh] bg-[#0003] backdrop-blur-[2px] flex  justify-center items-center`}>
        <div className="w-full max-w-[400px] bg-white p-6 rounded-xl flex flex-col gap-2">
        <header className=" flex justify-center items-center relative">
            <h2 className=" text-xl font-semibold">Eliminando Usuario</h2>
            <span className=" absolute top-0 right-0 text-xl font-medium text-red-600 cursor-pointer" onClick={handleClose}>X</span>
        </header>
        <h2 className=" text-center text-lg">Esta seguro que desea eliminar a <span className=" font-semibold">{deleteTheUser?.first_name} {deleteTheUser?.last_name}</span>?</h2>
        <button className="   bg-red-600 text-white rounded-xl text-center text-lg font-semibold block py-1"  onClick={handleDelete}>Eliminar</button>

        </div>
        
    </div>);
}

export default DeleteUser;