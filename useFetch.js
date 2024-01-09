import React from 'react'
import { useState, useEffect } from 'react'
// Este custom hook sirve para manejar las peticiones a una api, en el parametro tiene que recibir la url para la peticion a la API.
export  const useFetch = (url) => {
    // Tenemos este estado que guarda varios valores como el isLoading, que nos sirve para cargar una pantalla de carga, etc.
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })
    // Esta funcion manda a llamar los datos de la api y los guarda en la constante state
    const getFetch = async () => {
        // cambiamos el valor de isLoading a true para indicar que muestre la pantalla de carga por que los datos  todavia no estan listos
        setState({
            ...state,
            isLoading: true,
        })
        const resp = await fetch(url);
        const data = await resp.json();
        // cambiamos el valor de isLoading a false para indicar que ya no se muestre la pantalla de carga por que los datos ya estan listos
        setState({
            data,
            isLoading: false,
            hasError: null
        })
    };

    useEffect(() => {
        getFetch()
    }, [url]); // En este caso el useEffect se va a llamar cada vez que la url cambie. Este valor hay que adaptarlo segun lo que requiera cada proyecto.

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  }
}
// La manera que funciona es la siguiente: 1- El useEffect detecta que la url cambia. 2- El useEffect manda a llamar la funcion getFech(). 3- La funcion getFech() trae los datos que contiene la url que se paso en el parametro del hook. 4- Retornamos los valores de que se procesaron en el hook de la API.

// Este hook puede procesar mas datos si queremos, se adapta a lo que el proyecto requiera.

