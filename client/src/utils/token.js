import axios from 'axios'

// export const checkToken = async (setUser) => {
//   try {
//     const token = localStorage.getItem('authorisation')
//     await axios.get('http://localhost:5000/api/customer/check-token', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     setUser({
//       auth: true,
//       loading: false,
//     })
//   } catch (err) {
//     setUser({
//       auth: false,
//       loading: false,
//     })
//   }
// }


// export const checkPasswordToken = async (token, setUser) => {
//   try {
//     await axios.get('http://localhost:5000/users/check-password-token', {
//       headers: {
//         token,
//       },
//     })
//     setUser({
//       auth: true,
//       loading: false,
//     })
//   } catch (err) {
//     console.log(err.message)
//     setUser({
//       auth: false,
//       loading: false,
//     })
//   }
// }