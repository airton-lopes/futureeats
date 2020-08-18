import React, { useState } from 'react';



export const user = {
        id: "",
        name: "",
        email: "",
        cpf: "",
        hasAddress: false,
        token: "",
        street: "",
        number: "",
        neighbourhood: "",
        city: "",
        state: "",
        complement: "",
        confirmPassword: '',
        password: '',
    }



export const useUserInfo = () =>{
    const [userData, setUserData] = useState(user);

    const onChangeUserData = event =>{
        const {name, value} = event.target;

        setUserData({...userData, [name] : value})
    }       
    return {userData, onChangeUserData, setUserData}
}

export const UserContext = React.createContext();