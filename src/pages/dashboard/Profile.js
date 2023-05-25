import React from 'react'
import {FormRow} from '../../components'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import {useDispatch,useSelector} from 'react-redux'
import {toast} from 'react-toastify'

function Profile() {
  const {isLoading} = useSelector((store)=> store.user);
  const dispatch = useDispatch();
  return (
    <div>Profile</div>
  )
}

export default Profile