import { useState } from 'react';

import styles from './Form.module.css';

function PostNewPropertyForm() {
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
    images: [],
  });

  const handleSubmit = (event) => {
    // Lógica para manejar el envío del formulario
  };

  const handleChange = (event) => {
    // Lógica para manejar los cambios en los campos del formulario
  };

  return (
    <>
      <div>
      <div className={styles.formContainer}>
      <p className={styles.formInstructions}>Favor de rellenar toda la información solicitada para crear una nueva propiedad:</p>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <div className={styles.inputField}>
            <p className={styles.formInstructions}>Favor de seleccionar tipo de servicio*:</p>
            <label>
              <input type='radio' name='category' value={input.category}/> Arriendo
              </label>
              <label>
              <input type='radio' name='category' value={input.category}/> Venta
            </label>
            <p className={styles.formInstructions}>Favor de seleccionar tipo de inmueble*:</p>
            <label>
              <input type='radio' name='type' value={input.type}/> Arriendo
              </label>
              <label>
              <input type='radio' name='type' value={input.type}/> Venta
            </label>
            <label>Precio*:
              <div className={styles.inputContainer}>
                <input type='text' name='price' value={input.price} onChange={handleChange}/>
              </div>
            </label>
            <label>Región*:
              <div className={styles.inputContainer}>
                <input type='text' name='region' value={input.region} onChange={handleChange}/>
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
                <input type='text' name='address' value={input.address} onChange={handleChange}/>
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
                    <div className={styles.descriptionContainer}>
                        <input name='title' value={input.title} onChange={handleChange} className={styles.title} />
                    </div>
                </label>
                <label>Description*:
                    <div className={styles.descriptionContainer}>
                        <textarea name='description' value={input.description} onChange={handleChange} className={styles.textarea} />
                    </div>
                </label>
                </div>
          </div>
        </form>
        </div>
      </div>
    </>
  );
}
  
export default PostNewPropertyForm;
