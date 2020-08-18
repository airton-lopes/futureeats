export const initialState = {
    name: false,
    email: false,
    cpf: false,
    id: false,
    token:false,
    password: false,
    confirmPassword: false,
    street:false,
    number:false,
    neighbourhood:false,
    city:false,
    state:false,
    complement:false,
}

export const FormValidationReducer = (state, action) => {
    const {type,data} = action;
    switch(type){
        case 'SIGN_UP':
            return {
                name: !(data.name.length >= 2),
                email: !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email),
                cpf: !/^\d{3}\.\d{3}\.\d{3}\.\d{2}$/.test(data.cpf),
                password: (data.password !== data.confirmPassword),
                confirmPassword: (data.password !== data.confirmPassword),
            };
        case 'name':
            return { ...state,  name: !(data.name.length >= 2 || data.name === '') };
        case 'email':
            return { ...state, email: !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email) || data.email === '')};
        case 'cpf':
            return { ...state, cpf: !(/^\d{3}\.\d{3}\.\d{3}\.\d{2}$/.test(data.cpf) || data.cpf === ''),};
        case 'password':
            return { ...state,  password: ((data.password !== data.confirmPassword) || data.confirmPassword === '' ),};
        case 'confirmPassword':
            return { ...state,  
                    confirmPassword: ((data.password !== data.confirmPassword) || data.confirmPassword === '' ),
                    password: ((data.password !== data.confirmPassword) || data.confirmPassword === '' ),
        };
    }
}