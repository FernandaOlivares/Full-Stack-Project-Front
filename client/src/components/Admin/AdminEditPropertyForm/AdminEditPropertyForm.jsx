/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import UploadWidget from '../../UploadWidget/UploadWidget.jsx';
import { capitalizeSentences } from '../../../utils/stringUtils.js'
import { getPropertyById } from '../../../redux/actions/index.jsx';
import { editProperty } from '../../../redux/actions/index.jsx';

import styles from './AdminEditPropertyForm.module.css';
import PropertyEditedAlert from '../../Alerts/PropertyCreatedAlert.jsx';
import ErrorPropertyEditedAlert from '../../Alerts/ErrorPropertyCreationAlert.jsx';

function AdminEditPropertyForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const propertyById = useSelector((state) => state.propertyById);
  const { title, type, category, region, city, zone, address, price, bedrooms, bathrooms, parking, storage, swimmingPool, description, imageDefault } = propertyById;

  
  const [input, setInput] = useState({
    id: id,
    category: '',
    type: '',
    price: '',
    region: '',
    city: '',
    zone: '',
    address: '',
    bedrooms: '',
    bathrooms: '',
    parking: '',
    storage: '',
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

  useEffect(() => {
    dispatch(getPropertyById(id)).then(() => {
      setIsLoading(false);
    });
  }, [dispatch, id]);

  
  useEffect(() => {
    if (propertyById) {
        setInput({
          id: propertyById.id,
          category: propertyById.category || '',
          type: propertyById.type || '',
          price: propertyById.price || '',
          region: propertyById.region || '',
          city: propertyById.city || '',
          zone: propertyById.zone || '',
          address: propertyById.address || '',
          bedrooms: propertyById.bedrooms || '',
          bathrooms: propertyById.bathrooms || '',
          parking: propertyById.parking || '',
          storage: propertyById.storage || '',
          swimmingPool: propertyById.swimmingPool || '',
          title: propertyById.title || '',
          description: propertyById.description || '',
          imageDefault: propertyById.imageDefault || [],
        });
    }
}, [dispatch, propertyById, id]);

useEffect(() => {
  if (propertyById && formSubmitted && !isLoading) {
    setIsLoading(true);

    dispatch(editProperty(id, input)).then(() => {
      setIsLoading(false);
      const delay = 2000;
      const redirectTimer = setTimeout(() => {
        navigate(`/home/${id}`);
      }, delay);

      return () => clearTimeout(redirectTimer);
    }).catch(error => {
      setIsLoading(false);
      console.error('Error editing property:', error);
      ErrorPropertyEditedAlert();
    });
  }
}, [propertyById, formSubmitted, isLoading, dispatch, id, input, navigate]);


  
  const validateFormInput = (propertyInfo) => {
    const errors = {};

  if (!propertyInfo.category || propertyInfo.category === '') {
    errors.category = '*Campo obligatorio';
  }
  if (!propertyInfo.type || propertyInfo.type === '') {
    errors.type = '*Campo obligatorio';
  }
  if (!propertyInfo.price ||isNaN(parseInt(propertyInfo.price)) || parseInt(propertyInfo.price) <= 0 || propertyInfo.price.length < 1 || propertyInfo.price.length > 20) {
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

  if (!propertyInfo.bedrooms || isNaN(parseInt(propertyInfo.bedrooms)) || parseInt(propertyInfo.bedrooms) <= 0 || propertyInfo.bedrooms.length <= 0 || propertyInfo.bedrooms.length > 2) {
    errors.bedrooms = '*Usar solo números, máx. 2 dígitos';
}
  if (!propertyInfo.bathrooms || isNaN(parseInt(propertyInfo.bathrooms)) || parseInt(propertyInfo.bathrooms) <= 0 || propertyInfo.bathrooms.length > 2) {
    errors.bathrooms = '*Usar solo números, máx. 2 dígitos';
  }
 
if (!propertyInfo.parking || isNaN(parseInt(propertyInfo.parking)) || parseInt(propertyInfo.parking) <= 0 || propertyInfo.parking.length > 2) {
    errors.parking = '*Usar solo números, máx. 2 dígitos';
  }

if (!propertyInfo.storage || isNaN(parseInt(propertyInfo.storage)) || parseInt(propertyInfo.storage) <= 0 || propertyInfo.storage.length > 2) {
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

setError(errors);

    return Object.keys(errors).length === 0;
} 
    

const handleImageUpload = (imageUrls) => {
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
        await dispatch(editProperty(id, input));
        PropertyEditedAlert(input.title);
        setFormSubmitted(true);
      } catch (error) {
        console.error('Error editing property:', error);
        ErrorPropertyEditedAlert();
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
    e.stopPropagation();
    handleRemoveImage(index);
  };

  const renderImagePreviews = () => {
    return input.imageDefault.map((imageUrl, index) => (
      <div key={index} className={styles.imagePreview}>
        <img src={imageUrl} alt={`Preview ${index}`} />
        <button type="button" onClick={(e) => handleCloseButtonClick(e)}>X</button>
      </div>
    ));
  };
 
  useEffect(() => {
    if (imageDefault) {
      setInput(prevInput => ({
        ...prevInput,
        imageDefault: imageDefault,
      }));
    }
  }, [imageDefault]);

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
      <h2>Editar Propiedad</h2>
      <p className={styles.formInstructions}>Modifica la información que necesites para actualizar la información de la propiedad:</p>
    </div>
  <div className={styles.formContainer}>
    <form onSubmit={handleSubmit}>
      <div className={styles.formContainerLeft}>
        <div className={styles.selectContainer}>
        <div>
            <label> Tipo de servicio*: </label>
                <span className={styles.errorMessage}>{error.category}</span>
              <div>
                <select name='category' value={input.category} onChange={(e) => handleChange(e)} className={styles.selectButton}>
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
                <select name='type' value={input.type} onChange={(e) => handleChange(e)} className={styles.selectButton}>
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
                <input type='text' name='price' value={input.price} onChange={(e) => handleChange(e)}/>
              <span className={styles.errorMessage}>{error.price}</span>
              </div>
              </label>
              </div>
            <div className={styles.inputField}>
          <label>Región*:
            <div className={styles.inputContainer}>
              <input type='text' name='region' value={input.region || ''} onChange={(e) => handleChange(e)} />
            </div>
            <span className={styles.errorMessage}>{error.region}</span>
          </label>
          <label>Ciudad*:
            <div className={styles.inputContainer}>
              <input type='text' name='city' value={input.city} onChange={(e) => handleChange(e)}/>
            </div>
            <span className={styles.errorMessage}>{error.city}</span>
          </label>
          </div>
          <div className={styles.inputField}>
          <label>Comuna*:
            <div className={styles.inputContainer}>
              <input type='text' name='zone' value={input.zone} onChange={(e) => handleChange(e)}/>
            </div>
            <span className={styles.errorMessage}>{error.zone}</span>
          </label>
          <label>Dirección*:
            <div className={styles.inputContainer}>
              <input type='text' name='address' value={input.address} onChange={(e) => handleChange(e)}/>
            </div>
            <span className={styles.errorMessage}>{error.address}</span>
          </label>
          </div>


          <div className={styles.inputField}>
          <label>Nº Dormitorios*:
            <div className={styles.inputContainer}>
              <input type='text' name='bedrooms' value={input.bedrooms} onChange={(e) => handleChange(e)}/>
            </div>
            <span className={styles.errorMessage}>{error.bedrooms}</span>
          </label>
          <label>Nº Baños*:
            <div className={styles.inputContainer}>
              <input type='text' name='bathrooms' value={input.bathrooms} onChange={(e) => handleChange(e)}/>
            </div>
            <span className={styles.errorMessage}>{error.bathrooms}</span>
          </label>
          </div>
          <div className={styles.inputField}>
          <label>Estacionamientos*:
            <div className={styles.inputContainer}>
              <input type='text' name='parking' value={input.parking} onChange={(e) => handleChange(e)}/>
            </div>
            <span className={styles.errorMessage}>{error.parking}</span>
          </label>
   
          <div className={styles.inputField}>
          <label>Bodega*:
            <div className={styles.inputContainer}>
              <input type='text' name='storage' value={input.storage} onChange={(e) => handleChange(e)}/>
            </div>
            <span className={styles.errorMessage}>{error.storage}</span>
          </label>
          </div>
          </div>
          <div className={styles.inputField}>
          <div className={styles.selectContainer}>
        <label>Piscina*:
          <div className={styles.swimmingPoolSelect}>
          <select name='swimmingPool' value={input.swimmingPool} onChange={(e) => handleChange(e)} className={styles.selectButton}>
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
                <input type='text' name='title' value={input.title} onChange={(e) => handleChange(e)}  />
            </div>
          </label>
          </div>
          <div className={styles.inputField}>
          <label>Description*:
            <span className={styles.errorMessage}>{error.description}</span>
            <div className={styles.descriptionContainer}>
              <textarea name='description' value={input.description} onChange={(e) => handleChange(e)} className={styles.textarea} />
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
          <button type='submit' disabled={!Object.keys(error).every(key => error[key] === '')}>Guardar Cambios</button>
        </div>
      </form>
    </div>
    </div>
  </>
);
}
  
export default AdminEditPropertyForm;
