import { useEffect } from "react";
import { useForm } from "react-hook-form";
const ModalForm = ({ createUser, editUser, updateUser, setEditUser, modal, setModal, setCheckTrue, setrModalTextConfirm }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    useEffect(() => {

        reset(editUser)


    }, [editUser])
    const submit = (data) => {
        console.log(data)
        if (data.image_url?.trim() === '') {
            delete data.image_url;
        }

        if (data.birthday?.trim() === '') {
            delete data.birthday;
        }


        if (editUser) {
            updateUser('users/', editUser.id, data)
            setEditUser()
            setrModalTextConfirm("Usuario modificado")
        } else {
            createUser('users/', data);
            setrModalTextConfirm("Usuario creado")
        }
        reset({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            birthday: "",
        })
        setModal(true)
        setCheckTrue(false)
    }

    const handleCloseModal = () => {
        setModal(true)
    }

    return (<div className={` ${modal && 'hidden'} fixed top-0 left-0 w-full min-h-[100vh] bg-[#0003] backdrop-blur-[2px] flex justify-center items-center transition-transform`}>
        <form className=" w-full max-w-[400px] bg-white p-6 rounded-xl flex flex-col gap-2 [&>label]:font-medium [&>label]:px-1 [&>label]:text-sm [&>input]:border [&>input]:border-gray-400 
        [&>input]:px-2 [&>input]:rounded-lg " action="" onSubmit={handleSubmit(submit)}>
            <header className=" flex justify-center relative">
                <h2 className=" text-xl font-semibold">Nuevo usuario</h2>
                <div onClick={handleCloseModal} className=" absolute top-0 right-0 text-red-600 font-semibold cursor-pointer">X</div>
            </header>

            <label htmlFor="correo">Correo<span className=" text-red-600 font-semibold">*</span></label>
            {errors.email && <span className=" bg-red-600 text-white rounded-xl text-center block">{errors.email.message}</span>}
            <input type="email"  {...register("email", {
                required: {
                    value: true,
                    message: "Este campo es requerido"
                },
                minLength: {
                    value: 5,
                    message: "El correo debe tener al menos 5 caracteres"
                }
            })} id="correo" placeholder="anonimo@gmail.com" />
            <label htmlFor="contraseña">Contraseña<span className=" text-red-600 font-semibold">*</span></label>
            {errors.password && <span className=" bg-red-600 text-white rounded-xl text-center block px-1">{errors.password.message}</span>}
            <input type="password" {...register("password", {
                required: {
                    value: true,
                    message: "Este campo es requerido"
                },
                minLength: {
                    value: 8,
                    message: "La contraseña debe tener al menos 8 caracteres"
                }
            })} id="contraseña" placeholder="********" />
            <label htmlFor="nombre">Nombre<span className=" text-red-600 font-semibold">*</span></label>
            {errors.first_name && <span className=" bg-red-600 text-white rounded-xl text-center block">{errors.first_name.message}</span>}
            <input type="text" {...register("first_name", {
                required: {
                    value: true,
                    message: "Este campo es requerido"
                },
                minLength: {
                    value: 3,
                    message: "El nombre debe tener al menos 3 caracteres"
                }
            })} id="nombre" placeholder="Escliba su nombre" />
            <label htmlFor="apellido">Apellido<span className=" text-red-600 font-semibold">*</span></label>
            {errors.last_name && <span className=" bg-red-600 text-white rounded-xl text-center block">{errors.last_name.message}</span>}
            <input type="text" {...register("last_name", {
                required: {
                    value: true,
                    message: "Este campo es requerido"
                },
                minLength: {
                    value: 3,
                    message: "El apellido debe tener al menos 3 caracteres"
                }
            })} id="apellido" placeholder="Escriba su apellido" />
            <label htmlFor="cumpleaños">Cumpleaños</label>
            {errors.birthday && <span className=" bg-red-600 text-white rounded-xl text-center block">{errors.birthday.message}</span>}
            <input type="date" {...register("birthday", {
                required: {
                    value: false,
                },
            })} id="cumpleaños" placeholder="DD/MM/AAAA" />
            <label htmlFor="img">ImagenUrl</label>
            {errors.image_url && <span className=" bg-red-600 text-white rounded-xl text-center block">{errors.image_url.message}</span>}
            <input type="text" {...register("image_url", {
                required: {
                    value: false,
                },
                minLength: {
                    value: 13,
                    message: "La URL debe tener al menos 8 caracteres"
                }
            })} id="img" placeholder="Ingrese la url de la imagen" />
            <button className="text-white bg-[#555A88] hover:bg-[#666a8b] rounded-lg py-1 ">Submit</button>
        </form>
    </div>);
}

export default ModalForm;