import React, {useState} from 'react';
import '../hojas-de-estilo/Header.css';

const Header = () => {
  
  const [isOpen, setIsOpen] = useState(false)
  return (
   

    <div className='contenedorhea'>

          <div className='log'>

             <a href="#sobremi"><h1 className="logo"><span>(</span>JohannaPutero<span>)</span></h1></a>

          </div>

          <div className={`hamburguesa ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
            <i className="bi bi-list"></i>
          </div>

          <div className={`nav ${isOpen && "open"}`}>
             <a href="#sobremi" className="navegador"> <span>01 .</span> Sobre mí </a>
             <a href="#educacion" className="navegador"> <span>02 .</span> Educación</a>
             <a href="#proyecto" className="navegador"> <span>03 .</span> Proyectos</a>
             <a href="#contacto" className="navegador"> <span>04 .</span> Contacto</a>
           </div>

           
    </div>

      

  );
}

export default Header;