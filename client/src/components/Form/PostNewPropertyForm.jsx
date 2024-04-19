import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { postNewProperty } from '../../redux/actions/index.jsx';
import { postType } from '../../redux/actions/index.jsx';
import { postCategory } from '../../redux/actions/index.jsx';
import UploadWidget from '../UploadWidget/UploadWidget.jsx';

import styles from './Form.module.css';

function PostNewPropertyForm() {
  const dispatch = useDispatch();
  //const allTypes = useSelector((state) => state.allTypes);
  //const allCategories = useSelector((state) => state.allCategories);

  /*useEffect(() => {
    dispatch(getAllTypes());
    dispatch(allCategories());
  }, [dispatch]);*/

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
    swimmingPool:'',
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

  if (!propertyInfo.category || !/^[A-Za-zÀ-ÖØ-öø-Ÿ0-9\s'-]+(?<!-[-])$/.test(propertyInfo.category.trim()) || propertyInfo.category.length < 0 || propertyInfo.category.length > 30) {
    errors.category = '*Carácter inválido, max. 30';
  }
  if (!propertyInfo.type || !/^[A-Za-zÀ-ÖØ-öø-Ÿ0-9\s'-]+(?<!-[-])$/.test(propertyInfo.type.trim()) || propertyInfo.type.length < 0 || propertyInfo.type.length > 30) {
    errors.type = '*Carácter inválido, max. 30';
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

if (!/^si$|^no$/i.test(propertyInfo.swimmingPool.trim())) {
  errors.swimmingPool = '*Responder con "Si" o "No"';
}

if (!propertyInfo.title || !/^[A-Za-zÀ-ÖØ-öø-Ÿ0-9\s'-]+(?<!-[-])$/.test(propertyInfo.title.trim()) || propertyInfo.title.length < 2 || propertyInfo.title.length > 30) {
  errors.title = '*Carácter inválido, max. 30';
}

if (!propertyInfo.description || propertyInfo.description.length < 50 || propertyInfo.description.length > 3000) {
  errors.description = '*Usar entre 50-3000 caracteres ';
}

if (!propertyInfo.imageDefault || propertyInfo.imageDefault.length === 0) {
  errors.imageDefault = '*Debe proporcionar al menos un enlace de imagen';
}

    setError(errors);
    
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

        alert('La propiedad fue creada exitosamente.');
  
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
      } catch (error) {
        console.error('Error creating new property:', error);
        alert('Error en crear una nueva propiedad, por favor intente nuevamente.');
      }
    } 
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
    setInput((prevInput) => ({
        ...prevInput,
        [name]: value,
    }));
    validateFormInput({ ...input, [name]: value });
};

  return (
    <>
    <div className={styles.formContainer}>
      <div className={styles.pageTitle}>
        <h2>Publicar Nueva Propiedad</h2>
        <p className={styles.formInstructions}>Favor de rellenar toda la información solicitada para publicar una nueva propiedad:</p>
      </div>
      <div className={styles.formContainerLeft }>
        <form onSubmit={handleSubmit}>
          <div>
            <div className={styles.inputField}>
              <label>Tipo de servicio*:
              <span className={styles.errorMessage}>{error.category}</span>
              <div className={styles.inputContainer}>
                <input type='text' name='category' value={input.category} onChange={handleChange} />
              </div>
              </label>
              </div>
              <div className={styles.inputField}>
              <label>Tipo de propiedad*:
              <span className={styles.errorMessage}>{error.type}</span>
              <div className={styles.inputContainer}>
                <input type='text' name='type' value={input.type} onChange={handleChange} />
              </div>
              </label>
              </div>
              <div className={styles.inputField}>
              <label>Precio*:
              <span className={styles.errorMessage}>{error.price}</span>
              <div className={styles.inputContainer}>
                <input type='text' name='price' value={input.price} onChange={handleChange} />
              </div>
              </label>
              </div>
              <div className={styles.inputField}>
            <label>Región*:
              <span className={styles.errorMessage}>{error.region}</span>
              <div className={styles.inputContainer}>
                <input type='text' name='region' value={input.region} onChange={handleChange}/>
              </div>
            </label>
            </div>
            <div className={styles.inputField}>
            <label>Ciudad*:
              <span className={styles.errorMessage}>{error.city}</span>
              <div className={styles.inputContainer}>
                <input type='text' name='city' value={input.city} onChange={handleChange}/>
              </div>
            </label>
            </div>
            <div className={styles.inputField}>
            <label>Comuna*:
              <span className={styles.errorMessage}>{error.zone}</span>
              <div className={styles.inputContainer}>
                <input type='text' name='zone' value={input.zone} onChange={handleChange}/>
              </div>
            </label>
            </div>
            <div className={styles.inputField}>
            <label>Dirección*:
              <span className={styles.errorMessage}>{error.address}</span>
              <div className={styles.inputContainer}>
                <input type='text' name='address' value={input.address} onChange={handleChange}/>
              </div>
            </label>
            </div>
            <div className={styles.inputField}>
            <label>Cantidad de Dormitorios*:
              <span className={styles.errorMessage}>{error.bedrooms}</span>
              <div className={styles.inputContainer}>
                <input type='text' name='bedrooms' value={input.bedrooms} onChange={handleChange}/>
              </div>
            </label>
            </div>
            <div className={styles.inputField}>
            <label>Cantidad de Baños*:
              <span className={styles.errorMessage}>{error.bathrooms}</span>
              <div className={styles.inputContainer}>
                <input type='text' name='bathrooms' value={input.bathrooms} onChange={handleChange}/>
              </div>
            </label>
            </div>
            <div className={styles.inputField}>
            <label>Estacionamientos*:
              <span className={styles.errorMessage}>{error.parking}</span>
              <div className={styles.inputContainer}>
                <input type='text' name='parking' value={input.parking} onChange={handleChange}/>
              </div>
            </label>
            </div>
            <div className={styles.inputField}>
            <label>Bodegas*:
              <span className={styles.errorMessage}>{error.storage}</span>
              <div className={styles.inputContainer}>
                <input type='text' name='storage' value={input.storage} onChange={handleChange}/>
              </div>
            </label>
            </div>
            <div className={styles.inputField}>
            <label>Piscina*:
              <span className={styles.errorMessage}>{error.swimmingPool}</span>
              <div className={styles.inputContainer}>
                <input type='text' name='swimmingPool' value={input.swimmingPool} onChange={handleChange}/>
              </div>
            </label>
            </div>
            <div className={styles.inputField}>
            <label>Título*:
              <span className={styles.errorMessage}>{error.title}</span>
              <div className={styles.inputContainer}>
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
            <div className={styles.inputField}>
                <label >Imágenes*:
              <span className={styles.errorMessage}>{error.imageDefault}</span>
              <div className={styles.inputContainer}>
                <input type='text' name='imageDefault' value={input.imageDefault.join(', ')} onChange={handleChange}/>
              </div>
                <div/>
            </label>
            <div>
            <label>Subir fotos de la propiedad</label>
            <UploadWidget handleImageUpload={handleImageUpload}/>
            </div>
            <div className={styles.buttonContainer}>
            <button type='submit' disabled={!Object.keys(error).every(key => error[key] === '')}>Publicar Propiedad</button>
          </div>
            </div>
          </div>
        </form>
        <div>
        </div>
        </div>
      </div>
    </>
  );
}
  
export default PostNewPropertyForm;