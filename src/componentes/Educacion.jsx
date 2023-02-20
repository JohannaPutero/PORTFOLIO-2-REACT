import React from 'react';
import '../hojas-de-estilo/Educacion.css';

function Educacion() {
  return (
    <div className='conteiner' id='educacion'>
        <h1 className="edu">Educación</h1>
        <div className="linea-tiempo">
               <div className="momento">
                   <h3>2016</h3>
                  <div className="descripcion">
                    Ingeniería de Procesos (UBA) <br></br>


                  </div>
               </div>
               <div className="momento">
                    <h3>2019</h3>
                    <div className="descripcion">
                      Inglés universitario (UBA) <br></br>
                    </div>
                </div>
               <div className="momento">
                    <h3>2022</h3>
                    <div className="descripcion">
                      Licenciatura en computación (UBA) <br></br>
                    </div>
               </div>
               <div className="momento">
                    <h3>2023</h3>
                    <div className="descripcion">
                    Diplomatura en Desarrollo Web (UTN)<br></br>
                    </div>
                </div>
        </div>
        <a href="#proyecto" className='mostrarMas'><span><i className='bi bi-arrow-down-circle-fill'></i></span> Mostrar más</a>

   </div>
      

  );
}

export default Educacion;