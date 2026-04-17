import React, { useEffect, useState } from 'react'
import api from '../api/springApi';

const AdminDashboard = () => {

  const [users, setUsers] = useState([
    {
      id: "23796293",
      name: "Shubham Singh",
      email: "shubham_singh@yahoo.com",
      status: true
    },
    {
      id: "984759845",
      name: "Harshit Singh",
      email: "harshit_singh@gmail.com",
      status: false
    },
    {
      id: "71233134",
      name: "Ankit Yadav",
      email: "yadav_ankit@gmail.com",
      status: true
    },
  ])

  // useEffect(()=>{
  //   const apires = api.get("/admin/show_users");
  //   setUsers(apires);
  // }, [])
  return (
    <>
      <h1>Welcome to the Admin Page</h1>
      <h2>Total : {users.length}</h2>

      <table border={5}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.status? "Inactive" : "Active"}</td>
                <td>
                  {user.status? <button>Activate</button> : <button>Deactivate</button>}
                </td>
              </tr>
            )

          })}

        </tbody>
      </table>
    </>

  )
}

export default AdminDashboard