import { useEffect,useState } from "react"
import ModalForm from "./components/ModalForm"
import useCrud from "./hooks/useCrud"
import UserCard from "./components/UserCard"
import DeleteUser from "./components/DeleteUser"
import CheckDelete from "./components/CheckTrue"
function App() {
  const BASEURL = "https://users-crud.academlo.tech"
  const [users, readUser, createUser, updateUser, deleteUser,] = useCrud(BASEURL)
  const [editUser,setEditUser] = useState()
  const [deleteTheUser,setDeleteTheUser] = useState()
  const [modal, setModal] = useState(true)
  const [modalTextConfirm,setrModalTextConfirm] = useState()
  const [deleteModal,setDeleteModal] = useState(false)
  const [checkTrue,setCheckTrue] = useState(true)
  useEffect(() => {
    readUser('users/')
  },[])

  useEffect(() => {
    setTimeout(() => {
      setCheckTrue(true)
    },2000)
  },[checkTrue])
  return (
    <div className=" flex flex-col justify-center px-2 py-5 sm:p-5 ">
      <header className=" flex w-full justify-between items-center mb-4 md:mb-8">
      <h1 className=" text-3xl md:text-4xl font-bold">Usuarios</h1>
      <button onClick={() => setModal(false)} className="  bg-[#555A88] hover:bg-[#666a8b] text-xs text-white rounded-xl sm:text-sm  px-4 py-2 w-auto flex items-center  gap-2"><span className=" text-2xl">+</span> Crear nuevo usuario</button>
      </header>
      <ModalForm createUser={createUser} editUser={editUser} updateUser={updateUser} setEditUser={setEditUser} modal={modal} setModal={setModal} setCheckTrue={setCheckTrue} setrModalTextConfirm={setrModalTextConfirm} />
      <div className=" w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 justify-items-center ">
        {users?.map(user => (<UserCard key={user.id} user={user}  setEditUser={setEditUser} setModal={setModal} setDeleteTheUser={setDeleteTheUser} setDeleteModal={setDeleteModal}/>))}
      </div>
      <DeleteUser deleteTheUser={deleteTheUser} deleteUser={deleteUser} deleteModal={deleteModal} setDeleteModal={setDeleteModal} setDeleteTheUser={setDeleteTheUser} setCheckTrue={setCheckTrue} setrModalTextConfirm={setrModalTextConfirm} />
      <CheckDelete checkTrue={checkTrue} modalTextConfirm={modalTextConfirm}/>
    </div>
  )
}

export default App
