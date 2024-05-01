
import AdminHeader from '../../components/Admin/AdminHeader/AdminHeader.jsx';
import EditPropertyForm from '../../components/Admin/AdminForm/EditForm.jsx'

import styles from './AdminEditProperty.module.css';

function AdminEditProperty() {
    return (
    <div>
     <AdminHeader/>
      <EditPropertyForm/>
    </div>
  );
}

  export default AdminEditProperty;