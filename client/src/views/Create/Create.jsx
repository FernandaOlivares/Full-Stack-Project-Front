import AdminNavBar from '../../components/NavBar/AdminNavBar.jsx';
import PostNewPropertyForm from '../../components/Form/PostNewPropertyForm.jsx';

import styles from './Create.module.css';

function Create() {

    return (
      <>
        <div>
            <div>
            <AdminNavBar/>
            </div>
            <div>
            <PostNewPropertyForm/>
            </div>
        </div>
      </>
    )
  }
  
  export default Create;