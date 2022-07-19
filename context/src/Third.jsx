import React, { useContext } from 'react'
import UserContext from './UserContext'

export default function Third() {
	// access the user object
	const user = useContext(UserContext)
	console.log(user)
	return (
		<div>Third</div>
	)
}
