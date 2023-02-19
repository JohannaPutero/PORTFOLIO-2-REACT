import React from 'react';
import '../hojas-de-estilo/Main.css';

function Main() {
  return (

    <div className='contenedor-Mai' id='principal'>

      <div className='contenedor'>

        <p className='hola'>
            ¡Hola!, <br></br>
            Mi nombre es <span>Johanna,</span> <br></br>
            Soy Desarrolladora Web Front-End <br></br>
           
        </p>
        <div className='ubicacion' >
            <i className='bi bi-geo-alt'></i>
            <p>
                Provincia de Buenos Aires, Argentina.
            </p>
        </div>
        
        <a href="#contacto" ><button className='mantengamonos'>Mantengámonos en contacto!</button></a>
        
        </div>


        <a href="#sobremi" className='mostrarMas'><span><i className='bi bi-arrow-down-circle-fill'></i></span> Mostrar más</a>

    </div>
  

      

  );
}

export default Main;