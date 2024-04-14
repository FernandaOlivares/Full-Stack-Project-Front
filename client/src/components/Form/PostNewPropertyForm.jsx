import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { postNewProperty } from '../../redux/actions/index.jsx'
//import { getAllTypes } from '../../redux/actions/index.jsx';

import styles from './Form.module.css';

function PostNewPropertyForm() {
  const dispatch = useDispatch();
  const allTypes = useSelector((state) => state.allTypes);
  const newPropertyId = useSelector((state) => state.newPropertyId);
  const allProperties = useSelector((state) => state.allProperties);

  /*useEffect(() => {
    dispatch(getAllTypes());
  }, [dispatch]);*/


  const [input, setInput] = useState({
    category:'',
    type:'',
    price: '',
    regions: '',
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
    image: [],
  });

  const [error, setError] = useState({
    category:'',
    type:'',
    price: '',
    regions: '',
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
    image: [],
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = validateFormInput(input);
    if (isValid) {
      try {    
        const propertyCreated = await dispatch(postNewProperty(input));
        const newPropertyId = propertyCreated.id;
        alert('Property created successfully!');
  
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
          images: [],
        });
      } catch (error) {
        console.error('Error creating new property:', error);
        alert('Error creating new property. Please try again.');
      }
    } 
  };

  const validateFormInput = (propertyInfo) => {
    const errors = {};

    if (!propertyInfo.price || !/^\d+$/.test(propertyInfo.price.trim()) || propertyInfo.price.length < 4 || propertyInfo.address.length > 20) {
      errors.price = '*Ingresar solo número entero mayor a cero.';
  }

  if (!propertyInfo.address || !/^[A-Za-zÀ-ÖØ-öø-Ÿ0-9\s'-]+(?<!-[-])$/.test(propertyInfo.address.trim()) || propertyInfo.address.length < 2 || propertyInfo.address.length > 30) {
    errors.address = '*Usar solo letras, números, espacios, apóstrofes, guiones, diacríticos, de 2 a 30 caracteres';
}
    setError(errors);
    
        return Object.keys(errors).length === 0;
  } 
    

  const handleChange = (event) => {
    setInput({
        ...input,
        [event.target.name]: event.target.value,
    });
    validateFormInput({ ...input, [event.target.name]: event.target.value });
};

  return (
    <>
    <div>
      <div className={styles.formContainer}>
        <p className={styles.formInstructions}>Favor de rellenar toda la información solicitada para crear una nueva propiedad:</p>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputField}>
            <div className={styles.labelInputContainer}>
              <label>Tipo de servicio*:</label>
              <div className={styles.radioContainer}>
                <label>
                  <input type='radio' name='category' value={input.category} onChange={handleChange} /> Arriendo
                </label>
                <label>
                  <input type='radio' name='category' value={input.category} onChange={handleChange} /> Venta
                </label>
              </div>
            </div>
            <div className={styles.labelInputContainer}>
              <label htmlFor='type'>Tipo de inmueble*:</label>
              <div className={styles.radioContainer}>
                <label>
                  <input type='radio' name='type' value={input.type} onChange={handleChange} /> Departamento
                </label>
                <label>
                  <input type='radio' name='type' value={input.type} onChange={handleChange} /> Casa
                </label>
              </div>
            </div>
              <label htmlFor='price'>Precio*:</label>
              <div className={styles.inputContainer}>
                <input type='text' name='price' value={input.price} onChange={handleChange} />
              </div>
              <span className={styles.errorMessage}>{error.address}</span>
            <label>Región*:
              <div className={styles.inputContainer}>
                <input type='text' name='regions' value={input.regions} onChange={handleChange}/>
              </div>
            </label>
            <label>Ciudad*:
              <div className={styles.inputContainer}>
                <input type='text' name='city' value={input.city} onChange={handleChange}/>
              </div>
            </label>
            <label>Comuna*:
              <div className={styles.inputContainer}>
                <input type='text' name='zone' value={input.zone} onChange={handleChange}/>
              </div>
            </label>
            <label>Dirección*:
              <div className={styles.inputContainer}>
                <input type='text' name='address' value={input.address} onChange={handleChange}/>
              </div>
              <span className={styles.errorMessage}>{error.address}</span>
            </label>
            <label>Cantidad de Dormitorios*:
              <div className={styles.inputContainer}>
                <input type='text' name='bedrooms' value={input.bedrooms} onChange={handleChange}/>
              </div>
            </label>
            <label>Cantidad de Baños*:
              <div className={styles.inputContainer}>
                <input type='text' name='bathrooms' value={input.bathrooms} onChange={handleChange}/>
              </div>
            </label>
            <label>Parking*:
              <div className={styles.inputContainer}>
                <input type='text' name='parking' value={input.parking} onChange={handleChange}/>
              </div>
            </label>
            <label>Bodega*:
              <div className={styles.inputContainer}>
                <input type='text' name='storage' value={input.storage} onChange={handleChange}/>
              </div>
            </label>
            <label>Piscina*:
              <div className={styles.inputContainer}>
                <input type='text' name='swimmingPool' value={input.swimmingPool} onChange={handleChange}/>
              </div>
            </label>
            <div className={styles.inputField}>
            <label>Título*:
                    <div className={styles.inputContainer}>
                        <input name='title' value={input.title} onChange={handleChange} className={styles.title} />
                    </div>
                </label>
                <label>Description*:
                    <div className={styles.descriptionContainer}>
                        <textarea name='description' value={input.description} onChange={handleChange} className={styles.textarea} />
                    </div>
                </label>
                </div>
                <label>Piscina*:
              <div className={styles.inputContainer}>
                <input type='text' name='image' value={input.image} onChange={handleChange}/>
              </div>
            </label>
          </div>
          <div className={styles.buttonContainer}>
                <button type='submit' disabled={!Object.keys(error).every(key => error[key] === '')}>Create New Driver</button>
            </div>
        </form>
        </div>
      </div>
    </>
  );
}
  
export default PostNewPropertyForm;
