import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [user, setUser] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label><b>Name</b></label><br />
			<input className="input1" type="text" name="name" value={user.name} onChange={handleInputChange} /><br />
			<label><b>Username</b></label><br />
			<input className="input2" type="text" name="username" value={user.username} onChange={handleInputChange} /><br />
			<button className="button1"><b>Add new user</b></button>
		</form>
	)
}

export default AddUserForm