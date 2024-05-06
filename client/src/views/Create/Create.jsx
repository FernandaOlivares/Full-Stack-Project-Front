import AdminHeader from '../../components/Admin/AdminHeader/AdminHeader.jsx';
import PostNewPropertyForm from '../../components/Form/PostNewPropertyForm.jsx';

//import styles from './Create.module.css';

function Create() {

    return (
      <>
        <div>
          <div>
          <AdminHeader/>
          </div>
          <div>
          <PostNewPropertyForm/>
          </div>
        </div>
      </>
    )
  }
  
  export default Create;