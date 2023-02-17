// export const logout = () => {
//     console.log('logout')
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
// }

import axiosInstance from "./Axios";
export const logout = async() => {
    console.log('logout')
    const response = await axiosInstance.post("/auth/logout");
    console.log(response)
    if(response.status ===200){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    }
}