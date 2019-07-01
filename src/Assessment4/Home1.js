import React, { useState, Fragment } from 'react'
import AddUserForm from './AddUserForm'
import EditUserForm from './EditUserForm'
import UserTable from './UserTable'
import './Home1.css'

const App = () => {

	const usersData = [

	]

	const initialFormState = { id: null, name: '', username: '' }


	const [users, setUsers] = useState(usersData)
	const [currentUser, setCurrentUser] = useState(initialFormState)
	const [editing, setEditing] = useState(false)

	const addUser = user => {
		user.id = users.length + 1
		setUsers([...users, user])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

	return (
		<div className="container">
			<div class="row">
				<div class="col-sm-6 col-lg-6 col-md-6 col-xs-6"><h1><b>React Application</b></h1></div>
				<div class="col-sm-5 col-lg-5 col-md-5 col-xs-5 ">
				</div>
				<div class="col-sm-1 col-lg-1 col-md-1 col-xs-1 "><a href="login"><b>Logout</b></a>
				</div>

			</div>
			<div className="row">
				<div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">					{editing ? (
					<Fragment>
						<h2><b>Add user</b></h2>
						<EditUserForm
							editing={editing}
							setEditing={setEditing}
							currentUser={currentUser}
							updateUser={updateUser}
						/>
					</Fragment>
				) : (
						<Fragment>
							<h2><b>Add user</b></h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
					<h2><b>View users</b></h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default App

