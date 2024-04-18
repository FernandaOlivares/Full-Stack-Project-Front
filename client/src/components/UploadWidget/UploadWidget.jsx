import {useEffect, useRef} from 'react';

//import styles from './UploadWidget.module.css';

function UploadWidget() {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(()=>{
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'cloudfilesfol',
            uploadPreset: 'presetPropertiesImagesPYD'
        }, function(error, result){
            console.log(result);
        });
    },[])

    return (
      <>
        <div>
          <div>
            <button onClick={()=> widgetRef.current.open()}>Upload</button>
          </div>
          <div>
          </div>
        </div>
      </>
    )
  }
  
  export default UploadWidget;