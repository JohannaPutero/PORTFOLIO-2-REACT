import React from 'react';
import '../hojas-de-estilo/Contacto.css';

function Contacto() {
  return (
    <div className='contiene'>
      <div className='contacto' id='contacto'>

        <div className='contactame'>

          <h1 className='cont'>Contáctame <span>!</span></h1>

           <div className='redes'>
    
              <a href="https://www.linkedin.com/in/johanna-bel%C3%A9n-putero-5964401ba/" className='red'><i className='bi bi-linkedin'></i></a>
              <a href="https://github.com/JohannaPutero" className='red'><i className='bi bi-github'></i></a>
              <a href="https://walink.co/a68b63" className='red'><i className='bi bi-whatsapp'></i></a>
              <a href="mailto:jputero@fi.uba.ar" className='red'><i className='bi bi-envelope'></i></a>
            
            </div>
         
          
         </div>     
         
            <div className='contenedorformulario'>
              <h1 className='form'>Formulario de contacto</h1>

            <form className='formulario' action="https://formsubmit.co/johannayumi@gmail.com" method="POST"> 
              
              <p className='texto'>

               <label for="nombre" className="colocar_nombre">Nombre :
               </label>
                 <input clatype="text" name="introducir_nombre" id="nombre" required="obligatorio" ></input>   

                 <label for="nasunto" className="colocar_asunto">Asunto :
                 </label>
                 <input clatype="text" name="introducir_asunto" id="asunto" required="obligatorio" ></input>   
              

             
                 <label for="email" className="colocar_email">Email :
                 </label>
                
                 <input type="email" name="introducir_email" id="email" required="obligatorio" ></input>   
             
              
                 <label for="mensaje" className="colocar_mensaje">Mensaje :
                 </label>   
                 

                 <textarea name="introducir_mensaje" className="texto_mensaje" id="mensaje" required="obligatorio" placeholder= "Deja aquí tu mensaje..."></textarea> 

                 </p>
             
                
                 <button className='boton' type="submit" name="enviar_formulario" id="enviar"><p>Enviar</p></button>
             
         
        </form>
        </div>
       
      </div>  
  
  

        <a href="#principal" className='mostrarMas'><span><i className='bi bi-arrow-up-circle-fill'></i></span> Volver arriba</a>

  </div>

    
   

    

      

  );
}

export default Contacto;