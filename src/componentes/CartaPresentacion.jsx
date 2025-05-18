import SimpleParallax from "simple-parallax-js";

// imagenes
import lider from "../assets/lider.jpg";
import analista from "../assets/Analista.jpg";
import front from "../assets/Front - end.jpg";
import programador from "../assets/Programador.jpg";

export let data_cartasPresentacion = [
    {
        nombre: "Andelson González",
        rol: "Lider de Proyecto | Programador Full Stack",
        telefono: [(<i class="fa-solid fa-phone-volume"></i>), "+1 809-281-4086"],
        correo: [(<i class="fa-solid fa-envelope"></i>), 'devandelsongonzalez@gmail.com'],
        portafolio: ["00andelsonportafolio.free.nf", 'https://github.com/Devandelson'],
        imagen: lider
    },
    {
        nombre: "Aris Manuel Cortico",
        rol: "Programador Full Stack",
        telefono: '',
        correo: [(<i class="fa-solid fa-envelope"></i>), 'arismanuel.c.r@gmail.com'],
        portafolio: ["https://ariscortico.github.io/portafolio/index.html#Home", 'https://github.com/ArisCortico'],
        imagen: programador
    },
    {
        nombre: "Ana Esmell Caraballo",
        rol: "Programadora back-end | Analista",
        telefono: '',
        correo: '',
        portafolio: ['', 'https://github.com/esmell993'],
        imagen: analista
    },
    {
        nombre: "Brayan Francisco de los santos",
        rol: "Programador Front-end",
        telefono: '',
        correo: '',
        portafolio: "",
        imagen: front
    },
    {
        nombre: "Andersson De Los Santos",
        rol: "Diseñador UI/UX",
        telefono: '',
        correo: [(<i class="fa-solid fa-envelope"></i>), 'Andersson7151@gmail.com'],
        portafolio: ['', 'https://github.com/AlejandroSP256'],
        imagen: front
    },
    {
        nombre: "Angel Javier González",
        rol: "Programador Front-end",
        telefono: '',
        correo: [(<i class="fa-solid fa-envelope"></i>), 'angel.javier.balbuena.4@gmail.com'],
        portafolio: ['', 'https://github.com/Angel-Javier0707'],
        imagen: front
    },
    {
        nombre: "Claudia González",
        rol: "Programadora Front-end",
        telefono: '',
        correo: [(<i class="fa-solid fa-envelope"></i>), 'cld82935@gmail.com'],
        portafolio: "",
        imagen: front
    },
    {
        nombre: "Carla Noemí Vargas",
        rol: "Programadora Front-end",
        telefono: '',
        correo: [(<i class="fa-solid fa-envelope"></i>), 'noemivargasmelo@gmail.com'],
        portafolio: "",
        imagen: front
    },
    {
        nombre: "Alejandro Santos",
        rol: "Programdor Back-end",
        telefono: '',
        correo: [(<i class="fa-solid fa-envelope"></i>), 'alejandrosp256@gmail.com'],
        portafolio: "",
        imagen: programador
    },
    {
        nombre: "Brady Guzmán",
        rol: "Diseñador UI/UX",
        telefono: '',
        correo: [(<i class="fa-solid fa-envelope"></i>), 'guzmanbrady667@gmail.com'],
        portafolio: "",
        imagen: front
    }
];

export function CartaPresentacion({ nombre, rol, telefono, correo, portafolio, imagen, move }) {
    let checkDatosPortafolio = '';

    if (portafolio.length == 0) { } else {
        if (portafolio[0] !== '' && portafolio[1] !== '') {
            checkDatosPortafolio =
                (
                    <div className="enlaces">
                        <a href={portafolio[0]} target="_blank" rel="noopener noreferrer">
                            Ver portafolio completo <i class="fa-solid fa-angle-right"></i>
                        </a>
                        <a href={portafolio[1]} target="_blank" rel="noopener noreferrer">
                            Ver Github <i class="fa-solid fa-angle-right"></i>
                        </a>
                    </div>
                )
        }

        if (portafolio[0] == '' && portafolio[1] !== '') {
            checkDatosPortafolio =
                (
                    <a href={portafolio[1]} target="_blank" rel="noopener noreferrer">
                        Ver portafolio completo <i class="fa-solid fa-angle-right"></i>
                    </a>
                )
        }

        if (portafolio[0] !== '' && portafolio[1] == '') {
            checkDatosPortafolio =
                (
                    <a href={portafolio[0]} target="_blank" rel="noopener noreferrer">
                        Ver portafolio completo <i class="fa-solid fa-angle-right"></i>
                    </a>
                )
        }
    }

    return (
        <article className="item_presentacion">
            <SimpleParallax orientation='right'>
                <img src={imagen} alt="fondo del rol al que pertenece el miembro." />
            </SimpleParallax>

            <div className="contenido">
                <h3>{nombre}</h3>
                <p>{rol}</p>
                <ul>
                    <li>
                        {(telefono == '' ? undefined : telefono[0])}
                        <p>{(telefono == '' ? undefined : telefono[1])}</p>
                    </li>
                    <li>
                        {(correo == '' ? undefined : correo[0])}
                        <p>{(correo == '' ? undefined : correo[1])}</p>
                    </li>
                </ul>

                {checkDatosPortafolio}
            </div>
        </article>
    )
}