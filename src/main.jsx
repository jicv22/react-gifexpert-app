import React from 'react'
import ReactDOM from 'react-dom/client'
import {GifExpertApp} from './GifExpertApp'
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
)

//el stricmode es para detectar ciertas cosas. se puede buscar en la documentacion. Solo aplica para desarrollo, pero depende tambien en produccion.