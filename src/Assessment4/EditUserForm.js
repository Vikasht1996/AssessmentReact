import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [props]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label><b>Name</b></label><br />
      <input className="input3" type="text" name="name" value={user.name} onChange={handleInputChange} /><br />
      <label><b>Username</b></label><br />
      <input className="input4" type="text" name="username" value={user.username} onChange={handleInputChange} /><br />
      <button className="button4"><b>Update user</b></button>
      <button className="button5" onClick={() => props.setEditing(false)} >
        <b>Cancel</b>
      </button>
    </form>
  )
}

export default EditUserForm