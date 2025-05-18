import Inicio from "./inicio.jsx";
import "../css/presentacionEquipo.css";
import { data_cartasPresentacion, CartaPresentacion } from "./CartaPresentacion.jsx";
import Footer from './footer.jsx';

export default function App() {

  return (
    <>
      <main>
        <Decoracion />
        <Inicio />


        <section className="contenedor_miembros max">
          <span className="titulo_Presentacion_Equipo">
            <h2><i class="fa-solid fa-people-group"></i> Miembros del equipo</h2>
          </span>

          <div className="subontenedor_miembros">
            {
              data_cartasPresentacion.map((datos, index) => (
                <CartaPresentacion 
                  key={index} {...datos} 
                />
              ))
            }
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function Decoracion() {
  return (
    <section className="contenedor_decorativo">
      <div className="item_decorativo"></div>
      <div className="item_decorativo"></div>
    </section>
  );
}