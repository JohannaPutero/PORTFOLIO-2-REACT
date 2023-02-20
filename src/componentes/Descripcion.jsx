import React from 'react';
import '../hojas-de-estilo/Descripcion.css';


function Descripcion() {
    return (
       <section className='sobremi' id='sobremi'>

        <div className='contenedorimagentexto'>

            <div className='mundo'>
               <p>
                  Hola, <br></br>
                  Mundo!
               </p>
            </div>


          <div className='fotocv'>
            
                <img src={require('../imagenes/foto-cv.jpg')} alt='Foto de Johanna'/>
             
               <p className='presentacion'>
               Soy Desarrolladora Web Front-End. Domino los principios de HTML, CSS, Javascript y <span>React</span>. Cuento con sólidos conocimientos en <span>ingeniería</span>.
               </p>

          </div>
        </div>

        <a href="#educacion" className='mostrarMas'><span><i className='bi bi-arrow-down-circle-fill'></i></span> Mostrar más</a>
        

    </section>



      
      
    );
}
    export default Descripcion;