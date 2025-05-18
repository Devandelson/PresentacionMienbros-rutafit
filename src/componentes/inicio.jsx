import fondo_inicio from '../assets/Portada Semillero.jpeg';
import '../css/inicio.css';

import SimpleParallax from "simple-parallax-js";

export default function Inicio() {
    return (
        <header className='max'>
            <h1>¡Somos los creadores de FITMOVIT, la app de rutas que nació en el Semillero Digital Intro!.</h1>

            <img src={fondo_inicio} alt="fondo de semillero digital intro" />
        </header>
    );
}

