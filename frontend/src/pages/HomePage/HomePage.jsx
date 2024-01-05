import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/userSlice';

function HomePage() {
  const dispatch = useDispatch();


  return (
	<div><button onClick={() => dispatch(logout())}>Logout</button></div>
  )
}

export default HomePage