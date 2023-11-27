import { VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Galeria } from '../Components/Galeria/Galeria'
import { Header } from '../Components/Header/Header'
import { Footer } from '../Components/Footer/Footer'
import axios from 'axios'

const Main = () => {
    const [busqueda,setBusqueda] = useState('')
    const [resultadosBusqueda,setResultadosBusqueda] = useState([])
    const [imagenes,setImagenes] = useState([])
    const [cantidadImagenes,setCantidadImagenes] = useState((window.innerHeight >= 1080) ? 60 : 30)
    const [pagina,setPagina] = useState(1)
    const [actualizarEffect,setActualizarEffect] = useState(true);
    const [masImagenes, setMasImagenes] = useState(true);
  
    const paginaSiguiente = () => {
      setPagina(pagina + 1)
      setActualizarEffect(true)
    }

    const imagenBuscar = (e) => {
        setBusqueda(e.target.value)
    }

    const URL_BASE = 'https://api.unsplash.com/'
    const URL_IMAGES = 'photos/?'
    const URL_SEARCH = 'search/'
    const ACCESS_KEY='client_id=ME0crwr4K5KAYQShugOdqhOEZb6ToXGmCwBNECDWRd8'
  
    const buscarResultado = async () => {
      
      const response = await axios.get(`${URL_BASE}${URL_SEARCH}${URL_IMAGES}${ACCESS_KEY}&query=${busqueda}`)
      const data = response.data
      setResultadosBusqueda(data.results)
    }

    useEffect(() => {
        const getImagenes = async () => {
                const response = await axios.get(`${URL_BASE}${URL_IMAGES}${ACCESS_KEY}&per_page=${cantidadImagenes}&page=${pagina}`)
                const data = response.data
            setTimeout(() => {
                setImagenes(imagenes.concat(data))
                setActualizarEffect(false)
            }, 500);
        }
        getImagenes()

    },[actualizarEffect]) 


    return(
        <VStack>
            <Header/>
            <VStack w="80%">
                <Galeria imagenes={imagenes} paginaSiguiente={paginaSiguiente} masImagenes={masImagenes}/>
            </VStack>
            <Footer/>
        </VStack>
    )
}

export { Main }