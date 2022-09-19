import Navbar from "./components/Navbar";
import { About } from "./pages/InicioPage";
import { PerfilPage } from "./pages/PerfilPage";//
import { EstudiosPage } from "./pages/EstudiosPage";
import { PortafolioPage } from "./pages/PortafolioPage";
import { ContactoPage } from "./pages/ContactoPage";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <section id="perfil">
        <PerfilPage />
      </section>
      <section id="estudios" >
        <EstudiosPage />
      </section>
     
      <section id="portafolio">
       <h1 id="titulo">Portafolio</h1>
       <div id="items"><PortafolioPage /></div>
       
      </section>
      <section id="contacto">
        
      <ContactoPage />

      </section>
    </>
  );
}

export default App;
