/* eslint-disable react/prop-types */
import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ Component }) => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("user"))

  useEffect(() => {
    if (userInfo.user.role!=='admin') {
      navigate('/home');
    }
  }, [userInfo, navigate]);


  return (userInfo.user.role=='admin'&& <Component />
  );
};

export default ProtectedRoute;
