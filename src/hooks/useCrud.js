import axios from "axios";
import { useState } from "react";


const useCrud = (BASEURL) => {
    const [users, setUsers] = useState();

    const createUser = (path, data) => {
        const url = `${BASEURL}/${path}`;
        console.log(url)
        axios.post(url, data).then(res => {
            setUsers([...users, res.data]);

        }).catch(err => console.log(err))
    }

    const readUser = (path) => {
        const url = `${BASEURL}/${path}`;
        axios.get(url).then(res => {
            setUsers(res.data);
        }).catch(err => console.log(err))
    }


    const updateUser = (path, id, data) => {
        const url = `${BASEURL}/${path}${id}/`;
        axios.put(url, data).then(res => {
            setUsers(users.map(e => e.id === id ? res.data : e))
        }).catch(err => console.log(err))
    }

    const deleteUser = (path, id) => {
        const url = `${BASEURL}/${path}${id}/`;
        axios.delete(url).then(res => {
            setUsers( users.filter(e=> e.id !== id))
            setDeleteTheUser(res.data)
        }).catch(err => console.log(err))
    }

    return [
        users,
        readUser,
        createUser,
        updateUser,
        deleteUser
    ]


}

export default useCrud;