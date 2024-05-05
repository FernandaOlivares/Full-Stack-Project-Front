/* eslint-disable no-unused-vars */

import Header from '../../components/Header/Header.jsx';
import UserEditProfileForm from '../../components/UserEditProfileForm/UserEditProfileForm.jsx'

import styles from './UserEditProfile.module.css';


function UserEditProfile() {

    return (
      <>
        <div>
          <Header/>
          <UserEditProfileForm/>
        </div>
      </>
    )
  }
  
  export default UserEditProfile;