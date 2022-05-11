import axios from "axios";

export const register = async (prop) => {
    return new Promise((res, rej) => {
        axios.post('https://localhost:7259/api/account/register', {
        userName: prop.name,
        firstName: prop.first,
        lastName: prop.last,
        email: prop.email,
        phoneNumber: prop.phone,
        role: prop.role,
        password: prop.pass
      })
      .then(function (response) {
        return response
      })
      .catch(function (error) {
        console.log(error);
      });
    }) 
}

export const login = async (prop) => {
    return new Promise((res, rej) => {
        axios.post('https://localhost:7259/api/account/login', {
            email: prop.email,
            password: prop.password
        }).then(res => {return res})
            .catch(err => console.log(err))
    })
}