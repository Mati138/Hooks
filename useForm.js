import {useState} from 'react';
// El hook recibe en el parametro los datos del formulario (initialForm) el cual son asignados a la constante formState
export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);
// La funcion onInputChange trabaja con el evento de los formularios para guardar los datos que el usuario ingresa
  const onInputChange = ({target}) =>{
    const {name, value} = target;
    setFormState({
      ...formState,
      [name]:value 
    });
  }
  // Esta funcion reinicia a los valores iniciales del formulario
  const onResetForm = ()=>{
    setFormState(initialForm)
  }
  // Retornamos los valores para utilizarlos en los componentes que lo requieran 
  return {
    formState,
    onInputChange,
    onResetForm
  }
}


// El uso de corchetes ([]) alrededor de name en la expresión [name]: value se debe al hecho de que name es una variable y se utiliza como una clave dinámica para actualizar el estado del objeto formState. Se evalúa dinámicamente y se utiliza como la clave para actualizar el valor correspondiente en el objeto formState.