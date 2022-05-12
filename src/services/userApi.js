import axios from "axios";
import jwtDecode from "jwt-decode";

export const register = async (prop) => {

  const res = axios.post('https://localhost:7259/api/account/register', {
    userName: prop.name,
    firstName: prop.first,
    lastName: prop.last,
    email: prop.email,
    phoneNumber: prop.phone,
    role: prop.role,
    password: prop.pass
  })
    .then(({ data }) => {
      return data
    })
    .catch(function (error) {
      console.log(error);
    })

  return res
}

export const login = async (prop) => {
  const res = await axios.post('https://localhost:7259/api/account/login', {
    email: prop.email,
    password: prop.pass
  }).then(({ data }) => {
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
  })
    .catch(err => console.log(err))

  return res
}

export const check = (res) => {
  const token = localStorage.getItem('token')
  if (token) return true
  else return false
}

export const getUser = () => {
  const token = localStorage.getItem('token')
  return jwtDecode(token)
}