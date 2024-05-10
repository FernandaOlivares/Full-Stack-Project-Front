import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { postNewProperty } from '../../redux/actions/index.jsx';
import { postType } from '../../redux/actions/index.jsx';
import { postCategory } from '../../redux/actions/index.jsx';
import UploadWidget from '../UploadWidget/UploadWidget.jsx';
import { capitalizeSentences } from '../../utils/stringUtils.js'

import styles from './Form.module.css';
import PropertyCreatedAlert from '../Alerts/PropertyCreatedAlert.jsx';
import ErrorPropertyCreationAlert from '../Alerts/ErrorPropertyCreationAlert.jsx';
//import parkingIcon from '../../assets/icons/parking.png'
//import swimmingPoolIcon from '../../assets/icons/swimmingPool.png'
//import storageIcon from '../../assets/icons/storage.png'

function PostNewPropertyForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newPropertyId = useSelector((state) => state.newPropertyId);
  const [formSubmitted, setFormSubmitted] = useState(false);
  //const allTypes = useSelector((state) => state.allTypes);
  //const allCategories = useSelector((state) => state.allCategories);

  /*useEffect(()=>{
    ErrorPropertyCreationAlert();
  });*/

  /*useEffect(() => {
    dispatch(getAllTypes());
    dispatch(allCategories());
  }, [dispatch]);*/

  /*useEffect(() => {
    const isCreatingPropertyPage = window.location.pathname.includes('/create');
    if (newPropertyId && isCreatingPropertyPage) {
      navigate(`/home/${newPropertyId}`);
    }
  }, [newPropertyId, navigate]);*/
  

  useEffect(() => {
    console.log("newPropertyId:", newPropertyId);
    console.log("formSubmitted:", formSubmitted);
  
    // Redirigir solo si el formulario se ha enviado con éxito
    if (newPropertyId && formSubmitted) {
      console.log("Redirigiendo a la propiedad:", newPropertyId);
      navigate(`/home/${newPropertyId}`);
    }
  }, [newPropertyId, formSubmitted, navigate]);
  


  const [input, setInput] = useState({
    category:'',
    type:'',
    price: '',
    region: '',
    city: '',
    zone: '',
    address: '',
    bedrooms: '',
    bathrooms: '',
    parking: '',
    storage:'',
    swimmingPool: '',
    title: '',
    description: '',
    imageDefault: [],
  });

  const [error, setError] = useState({
    category:'',
    type:'',
    price: '',
    region: '',
    city: '',
    zone: '',
    address: '',
    bedrooms: '',
    bathrooms: '',
    parking: '',
    storage:'',
    swimmingPool:'',
    title: '',
    description: '',
    imageDefault: [],
  });


  const validateFormInput = (propertyInfo) => {
    const errors = {};

  if (!propertyInfo.category || propertyInfo.category === '') {
    errors.category = '*Campo obligatorio';
  }
  if (!propertyInfo.type || propertyInfo.type === '') {
    errors.type = '*Campo obligatorio';
  }
  if (!propertyInfo.price || !/^\d+$/.test(propertyInfo.price.trim()) || propertyInfo.price.length < 1 || propertyInfo.price.length > 20) {
    errors.price = '*Ingresar número entero mayor a cero';
  }

  if (!propertyInfo.region || !/^[A-Za-zÀ-ÖØ-öø-Ÿ0-9\s'-]+(?<!-[-])$/.test(propertyInfo.region.trim()) || propertyInfo.region.length < 0 || propertyInfo.region.length > 30) {
    errors.region = '*Carácter inválido, max. 30';
  }

  if (!propertyInfo.city || !/^[A-Za-zÀ-ÖØ-öø-Ÿ0-9\s'-]+(?<!-[-])$/.test(propertyInfo.city.trim()) || propertyInfo.city.length < 2 || propertyInfo.city.length > 30) {
    errors.city = '*Carácter inválido, max. 30';
  }

  if (!propertyInfo.zone || !/^[A-Za-zÀ-ÖØ-öø-Ÿ0-9\s'-]+(?<!-[-])$/.test(propertyInfo.zone.trim()) || propertyInfo.zone.length < 2 || propertyInfo.zone.length > 30) {
    errors.zone = '*Carácter inválido, max. 30';
  }

  if (!propertyInfo.address || !/^[A-Za-zÀ-ÖØ-öø-Ÿ0-9\s'-]+(?<!-[-])$/.test(propertyInfo.address.trim()) || propertyInfo.address.length < 2 || propertyInfo.address.length > 30) {
    errors.address = '*Carácter inválido, max. 30';
  }

  if (!propertyInfo.bedrooms || !/^\d+$/.test(propertyInfo.bedrooms.trim()) || propertyInfo.bedrooms.length <= 0 || propertyInfo.bedrooms.length > 2) {
    errors.bedrooms = '*Usar solo números, máx. 2 dígitos';
}
  if (!propertyInfo.bathrooms || !/^\d+$/.test(propertyInfo.bathrooms.trim()) || propertyInfo.bathrooms.length <= 0 || propertyInfo.bathrooms.length > 2) {
    errors.bathrooms = '*Usar solo números, máx. 2 dígitos';
  }
 
if (!propertyInfo.parking || !/^\d+$/.test(propertyInfo.parking.trim()) || propertyInfo.parking.length <= 0 || propertyInfo.parking.length > 2) {
    errors.parking = '*Usar solo números, máx. 2 dígitos';
  }

if (!propertyInfo.storage || !/^\d+$/.test(propertyInfo.storage.trim()) || propertyInfo.storage.length <= 0 || propertyInfo.storage.length > 2) {
  errors.storage = '*Usar solo números, máx. 2 dígitos';
}

if (!propertyInfo.swimmingPool || propertyInfo.swimmingPool === '') {
  errors.swimmingPool = '*Campo obligatorio';
}

if (!propertyInfo.title || !/^[A-Za-zÀ-ÖØ-öø-Ÿ0-9\s'-]+(?<!-[-])$/.test(propertyInfo.title.trim()) || propertyInfo.title.length < 2 || propertyInfo.title.length > 30) {
  errors.title = '*Carácter inválido, max. 30';
}

if (!propertyInfo.description || propertyInfo.description.length < 50 || propertyInfo.description.length > 3000) {
  errors.description = '*Usar entre 50-3000 caracteres ';
}

if (!propertyInfo.imageDefault || propertyInfo.imageDefault.length < 5) {
  errors.imageDefault = '*Debe proporcionar 5 imágenes';
}

if (Object.keys(propertyInfo).length > 0) {
  setError(errors);
}

/*return Object.keys(errors).length === 0;
    setError(errors);*/
    
    return Object.keys(errors).length === 0;
  } 
    
  const handleImageUpload = (imageUrls) => {
    console.log(imageUrls);
    setInput((prevInput) => ({
        ...prevInput,
        imageDefault: [...prevInput.imageDefault, ...imageUrls],
    }));
};

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = validateFormInput(input);
    if (isValid) {
      try {    
        dispatch(postNewProperty(input));
        dispatch(postType(input));
        dispatch(postCategory(input));

        PropertyCreatedAlert(input.title);
  
        setInput({
          category:'',
          type:'',
          price: '',
          region: '',
          city: '',
          zone: '',
          address: '',
          bedrooms: '',
          bathrooms: '',
          parking: '',
          storage:'',
          swimmingPool:'',
          title: '',
          description: '',
          imageDefault: [],
        });
        setFormSubmitted(true);
      } catch (error) {
        console.error('Error creating new property:', error);
        ErrorPropertyCreationAlert();
      }
    } 
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...input.imageDefault];
    updatedImages.splice(index, 1);
    setInput((prevInput) => ({
      ...prevInput,
      imageDefault: updatedImages,
    }));
  };

  const handleCloseButtonClick = (e, index) => {
    e.stopPropagation(); // Detener la propagación del evento para evitar que se propague al contenedor principal
    handleRemoveImage(index); // Llama a la función handleRemoveImage para eliminar la imagen
  };

  const renderImagePreviews = () => {
    return input.imageDefault.map((imageUrl, index) => (
      <div key={index} className={styles.imagePreview}>
        <img src={imageUrl} alt={`Preview ${index}`} />
        <button type="button" onClick={(e) => handleCloseButtonClick(e)}>X</button>
      </div>
    ));
  };
  /*const handleChange = (event) =>{
    

  const handleSubmit = () =>{
    // console.log(event.target.files);
    // setFile(event.target.files);
  }*/

  /*const previewFiles = () => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      console.log(image);
      setImage(reader.result);
    }
  }*/
  useEffect(() => {
    validateFormInput(input);
  }, [input]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    let updatedValue = value;
  if (['category', 'type', 'region','city','zone','address', 'title', 'description'].includes(name)) {
      updatedValue = capitalizeSentences(value);
  }
    setInput((prevInput) => ({
        ...prevInput,
        [name]: updatedValue,
    }));
    validateFormInput({ ...input, [name]: updatedValue });
};

return (
  <>
  <div className={styles.bodyContainer}>
    <div className={styles.pageTitle}>
      <h2>Publicar Nueva Propiedad</h2>
      <p className={styles.formInstructions}>Rellenar toda la información solicitada para publicar una nueva propiedad:</p>
    </div>
  <div className={styles.formContainer}>
    <form onSubmit={handleSubmit}>
      <div className={styles.formContainerLeft}>
        <div className={styles.selectContainer}>
        <div>
            <label> Tipo de servicio*: </label>
                <span className={styles.errorMessage}>{error.category}</span>
              <div>
                <select name='category' value={input.category} onChange={handleChange} className={styles.selectButton}>
                  <option value='' disabled>Selecciona una opción</option>
                  <option value='arriendo'>Arriendo</option>
                  <option value='venta'> Venta</option>
                </select>
              </div>
            </div>
            <div>
            <label> Tipo de propiedad*: </label>
                <span className={styles.errorMessage}>{error.type}</span>
              <div>
                <select name='type' value={input.type} onChange={handleChange} className={styles.selectButton}>
                  <option value='' disabled>Selecciona una opción</option>
                  <option value='casa'>Casa</option>
                  <option value='departamento'>Departamento</option>
                </select>
              </div>
          </div>
        </div>
        <div className={styles.inputsFieldLeftContainer}>
              <div className={styles.inputField}>
            <label>Precio* $:        
              <div className={styles.inputContainer}>
                <input type='text' name='price' value={input.price} onChange={handleChange}/>
              <span className={styles.errorMessage}>{error.price}</span>
              </div>
              </label>
              </div>
            <div className={styles.inputField}>
          <label>Región*:
            <div className={styles.inputContainer}>
              <input type='text' name='region' value={input.region} onChange={handleChange} />
            </div>
            <span className={styles.errorMessage}>{error.region}</span>
          </label>
          <label>Ciudad*:
            <div className={styles.inputContainer}>
              <input type='text' name='city' value={input.city} onChange={handleChange}/>
            </div>
            <span className={styles.errorMessage}>{error.city}</span>
          </label>
          </div>
          <div className={styles.inputField}>
          <label>Comuna*:
            <div className={styles.inputContainer}>
              <input type='text' name='zone' value={input.zone} onChange={handleChange}/>
            </div>
            <span className={styles.errorMessage}>{error.zone}</span>
          </label>
          <label>Dirección*:
            <div className={styles.inputContainer}>
              <input type='text' name='address' value={input.address} onChange={handleChange}/>
            </div>
            <span className={styles.errorMessage}>{error.address}</span>
          </label>
          </div>


          <div className={styles.inputField}>
          <label>Nº Dormitorios*:
            <div className={styles.inputContainer}>
              <input type='text' name='bedrooms' value={input.bedrooms} onChange={handleChange}/>
            </div>
            <span className={styles.errorMessage}>{error.bedrooms}</span>
          </label>
          <label>Nº Baños*:
            <div className={styles.inputContainer}>
              <input type='text' name='bathrooms' value={input.bathrooms} onChange={handleChange}/>
            </div>
            <span className={styles.errorMessage}>{error.bathrooms}</span>
          </label>
          </div>
          <div className={styles.inputField}>
          <label>Estacionamientos*:
            <div className={styles.inputContainer}>
              <input type='text' name='parking' value={input.parking} onChange={handleChange}/>
            </div>
            <span className={styles.errorMessage}>{error.parking}</span>
          </label>
   
          <div className={styles.inputField}>
          <label>Bodega*:
            <div className={styles.inputContainer}>
              <input type='text' name='storage' value={input.storage} onChange={handleChange}/>
            </div>
            <span className={styles.errorMessage}>{error.storage}</span>
          </label>
          </div>
          </div>
          <div className={styles.inputField}>
          <div className={styles.selectContainer}>
        <label>Piscina*:
          <div className={styles.swimmingPoolSelect}>
          <select name='swimmingPool' value={input.swimmingPool} onChange={handleChange} className={styles.selectButton}>
            <option value='' disabled>Selecciona una opción</option>
            <option value='si'>Sí</option>
            <option value='no'>No</option>
          </select>
          </div>
          <span className={styles.errorMessage}>{error.swimmingPool}</span>
        </label>
          </div>
          </div>

        </div>
        </div>

     <div className={styles.formContainerRight}>
          <div className={styles.inputField}>
          <label>Título*:
            <span className={styles.errorMessage}>{error.title}</span>
            <div className={styles.titleInputContainer}>
                <input type='text' name='title' value={input.title} onChange={handleChange}  />
            </div>
          </label>
          </div>
          <div className={styles.inputField}>
          <label>Description*:
            <span className={styles.errorMessage}>{error.description}</span>
            <div className={styles.descriptionContainer}>
              <textarea name='description' value={input.description} onChange={handleChange} className={styles.textarea} />
            </div>
          </label>
          </div>
          <div className={styles.uploadPicturesContainer}>
          <label>Fotos de la propiedad*:
          <span className={styles.errorMessage}>{error.imageDefault}</span>
          <div className={styles.uploadWidgetButtonContainer}>
          <UploadWidget handleImageUpload={handleImageUpload}/>
          </div>
          </label>
          <div className={styles.imagePreviewContainer}>
            {renderImagePreviews()}
          </div>
          </div>
          </div>
          <div className={styles.buttonContainer}>
          <button type='submit' disabled={!Object.keys(error).every(key => error[key] === '')}>Publicar Propiedad</button>
        </div>
      </form>
    </div>
    </div>
  </>
);
}
  
export default PostNewPropertyForm;
