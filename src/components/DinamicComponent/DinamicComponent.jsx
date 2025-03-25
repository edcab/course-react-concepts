import React, { useState } from 'react'

const Userlist = () => {

  const [users, setUsers] = useState([])

  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => setUsers(data))
  .catch(error => console.error(error))
    return (
        <div>
          <h2>Dynamic Component</h2>
            <ul>
              {
                users.map((user) => (
                  <li key={user.id}>{user.name}</li>
                ))
              }
            </ul>
        </div>
    )
}

export default Userlist