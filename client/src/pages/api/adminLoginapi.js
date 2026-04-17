import api from "./springApi"

const adminLogin = (email, pass)=>{
    // const res2 = axios.post("http://localhost:6060/admin/login", {
    //     email,
    //     pass
    // })
    const res = api.post("/admin/login", {
        email,
        pass
    })

    return res.data;
}


export default adminLogin;