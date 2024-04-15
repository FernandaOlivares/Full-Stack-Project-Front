import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { postNewProperty } from '../../redux/actions/index.jsx'
//import { getAllTypes } from '../../redux/actions/index.jsx';

import styles from './Form.module.css';
import parkingIcon from '../../assets/icons/parking.png'
import swimmingPoolIcon from '../../assets/icons/swimmingPool.png'
import storageIcon from '../../assets/icons/storage.png'

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
    region: '',
    city: '',
    zone: '',
    address: '',
    bedrooms: '',
    bathrooms: '',
    parking: '',
    storage:'No',
    swimmingPool:'No',
    title: '',
    description: '',
    image: [],
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

    const selectedCategory = document.querySelector('input[name="category"]:checked');
    if (!selectedCategory) {
        errors.category = '*Debe seleccionar una opción';
    }

    const selectedType = document.querySelector('input[name="type"]:checked');
    if (!selectedType) {
        errors.type = '*Debe seleccionar una opción';
    }

    if (!propertyInfo.price || !/^\d+$/.test(propertyInfo.price.trim()) || propertyInfo.price.length < 4 || propertyInfo.address.length > 20) {
      errors.price = '*Ingresar solo número entero mayor a cero.';
    }

  if (!propertyInfo.address || !/^[A-Za-zÀ-ÖØ-öø-Ÿ0-9\s'-]+(?<!-[-])$/.test(propertyInfo.address.trim()) || propertyInfo.address.length < 2 || propertyInfo.address.length > 30) {
    errors.address = '*Usar solo letras, números, espacios, apóstrofes, guiones, diacríticos, de 2 a 30 caracteres';
  }

  if (!propertyInfo.region) {
    errors.region = '*Este campo es obligatorio';
  }

  if (!propertyInfo.city) {
    errors.city = '*Este campo es obligatorio';
  }

  if (!propertyInfo.zone) {
    errors.zone = '*Este campo es obligatorio';
  }

  if (!propertyInfo.bedrooms) {
    errors.bedrooms = '*Este campo es obligatorio';
  }

  if (!propertyInfo.bathrooms) {
    errors.bathrooms = '*Este campo es obligatorio';
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
      <div className={styles.pageTitle}>
        <h2>Publicar Nueva Propiedad</h2>
        <p className={styles.formInstructions}>Favor de rellenar toda la información solicitada para publicar una nueva propiedad:</p>
      </div>
      <div className={styles.formContainerLeft }>
        <form onSubmit={handleSubmit}>
          <div>
            <div className={styles.labelInputContainer}>
              <label>Tipo de servicio*:</label>
              <div className={styles.radioContainer}>
              <label>
                <input type='radio' name='category' value={input.category} onChange={handleChange} /> Arriendo
              </label>
              <label>
                <input type='radio' name='category' value={input.category} onChange={handleChange} /> Venta
              </label>
              <label>
              <input type='radio' name='category' value='Otro' checked={input.type === 'Otro'} onChange={handleChange} /> Otro
              </label>
              {input.type === 'Otro' && (
                <input type='text' name='customCategory' value={input.category} onChange={handleChange} placeholder='Otro tipo de servicio' className={styles.othersContainer}/>
              )}
              <span className={styles.errorMessage}>{error.category}</span>
              </div>
            </div>
            <div className={styles.labelInputContainer}>
              <label>Tipo de inmueble*:</label>
              <div className={styles.radioContainer}>
              <label>
                <input type='radio' name='type' value={input.type} onChange={handleChange} /> Casa
              </label>
              <label>
                <input type='radio' name='type' value={input.type} onChange={handleChange} /> Departamento
              </label>
              <label>
              <input type='radio' name='type' value='Otro' checked={input.type === 'Otro'} onChange={handleChange} /> Otro
              </label>
              {input.type === 'Otro' && (
                <input type='text' name='customType' value={input.type} onChange={handleChange} placeholder='Otro tipo de inmueble' className={styles.othersContainer}/>
              )}
              <span className={styles.errorMessage}>{error.type}</span>
              </div>
            </div>
              <div className={styles.inputField}>
              <label>Precio*:
              <div className={styles.inputContainer}>
                <input type='text' name='price' value={input.price} onChange={handleChange} />
              </div>
              <span className={styles.errorMessage}>{error.price}</span>
              </label>
              </div>
              <div className={styles.inputField}>
            <label>Región*:
              <div className={styles.inputContainer}>
                <input type='text' name='region' value={input.region} onChange={handleChange}/>
              </div>
              <span className={styles.errorMessage}>{error.region}</span>
            </label>
            </div>
            <div className={styles.inputField}>
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
            </div>
            <div className={styles.inputField}>
            <label>Dirección*:
              <div className={styles.inputContainer}>
                <input type='text' name='address' value={input.address} onChange={handleChange}/>
              </div>
              <span className={styles.errorMessage}>{error.address}</span>
            </label>
            </div>
            <div className={styles.inputField}>
            <label>Cantidad de Dormitorios*:
              <div className={styles.inputContainer}>
                <input type='text' name='bedrooms' value={input.bedrooms} onChange={handleChange}/>
              </div>
              <span className={styles.errorMessage}>{error.bedrooms}</span>
            </label>
            </div>
            <div className={styles.inputField}>
            <label>Cantidad de Baños*:
              <div className={styles.inputContainer}>
                <input type='text' name='bathrooms' value={input.bathrooms} onChange={handleChange}/>
              </div>
              <span className={styles.errorMessage}>{error.bathrooms}</span>
            </label>
            </div>
            <div className={styles.buttonContainer}>
            <button type='submit' disabled={!Object.keys(error).every(key => error[key] === '')}>Publicar Propiedad</button>
          </div>
          </div>
        </form>
        </div>
        <div>
        <form>
        <div className={styles.formContainerRight }>
        <div>
        <div className={styles.iconsContainer}>
        <label>
                <input type='text' name='parking' value={input.parking} onChange={handleChange} className={styles.parkingNumber}/>
                <img src={input.parking === "Sí" ? parkingIcon : parkingIcon} alt="Piscina" className={styles.parkingIcon} />
              <span className={styles.errorMessage}>{error.parking}</span>
            </label>
            <div className={styles.checkboxContainer}>
              <input
                type="checkbox"
                name="storage"
                checked={input.storage === "Sí"}
                onChange={(e) => setInput({ ...input, storageIcon: e.target.checked ? "Sí" : "No" })}
                className={styles.checkboxInput}
              />
              <img src={input.storage === "Sí" ? storageIcon : storageIcon} alt="Piscina" className={styles.storageIcon} />
            </div>
            <div className={styles.checkboxContainer}>
              <input
                type="checkbox"
                name="swimmingPool"
                checked={input.swimmingPool === "Sí"}
                onChange={(e) => setInput({ ...input, swimmingPool: e.target.checked ? "Sí" : "No" })}
                className={styles.checkboxInput}
              />
              <img src={input.swimmingPool === "Sí" ? swimmingPoolIcon : swimmingPoolIcon} alt="Piscina" className={styles.swimmingPoolIcon} />
            </div>
            </div>
            <span className={styles.errorMessage}>{error.swimmingPool}</span>
            <div className={styles.inputField}>
            <label>Título*:
              <div className={styles.inputContainer}>
                  <input type='text' name='title' value={input.title} onChange={handleChange}  />
              </div>
              <span className={styles.errorMessage}>{error.title}</span>
            </label>
            </div>
            <div className={styles.inputField}>
            <label>Description*:
              <div className={styles.descriptionContainer}>
                <textarea name='description' value={input.description} onChange={handleChange} className={styles.textarea} />
              </div>
              <span className={styles.errorMessage}>{error.description}</span>
            </label>
            </div>
                </div>
                <div className={styles.inputField}>
                <label >Imágenes*:
              <div className={styles.inputContainer}>
                <input type='text' name='image' value={input.image} onChange={handleChange}/>
              </div>
                <div/>
            </label>
            </div>
              <span className={styles.errorMessage}>{error.image}</span>
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
