import '../css/footer.css';
import wave from '../assets/wave.svg';

export default function Footer() {
    return (
        <footer>
            <img src={wave} className='wave'/>

            <h2>
                ¡No lo pienses más, contáctanos!
                🚀 Somos programadores de ALTO IMPACTO,
                ¡listos para transformar tus ideas en soluciones extraordinarias! 💥
            </h2>
        </footer>
    )
}