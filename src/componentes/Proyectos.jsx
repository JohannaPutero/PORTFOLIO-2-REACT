import React from 'react';
import '../hojas-de-estilo/Proyectos.css';

function Proyectos() {
  return (
<div className='contenedor-pro' id='proyecto'>
<h1 className="edu">Proyectos</h1>

<div class="wrap">
		<div class="tarjeta-wrap">
		    
			<div class="tarjeta">
				<div class="adelante card1"></div>
				<div class="atras">
					<h1>Billetera virtual</h1>
					<p>
					Aplicación que calcula el saldo disponible a partir de la carga de gastos e ingresos. Permite clasificar estos dos últimos y tener un mejor registro de su historial financiero.
					</p>
				</div>
			</div>
		</div>
		<div class="tarjeta-wrap">
			<div class="tarjeta">
				<div class="adelante card2"></div>
				<div class="atras">
				    <h1>Blog de viajes</h1>
					<p> 
					 Página web para viajeros. Cuenta con la mejor información turística sobre Islandia: Hospedajes, excursiones, mercados, mapas locales y rutas recomendadas.
					</p>
				</div>
			</div>
		</div>
		<div class="tarjeta-wrap">
			<div class="tarjeta">
				<div class="adelante card3"></div>
				<div class="atras">
				    <h1>E-commerce</h1>
					<p> 
					 App para compras. Diseñada para un mercado local, permite visualizar los productos en stock, llenar el carrito, realizar pagos online y coordinar envíos.
					</p>
				</div>
			</div>
		</div>
	</div>


  <a href="#contacto" className='mostrarMas'><span><i className='bi bi-arrow-down-circle-fill'></i></span> Mostrar más</a>

</div>
  
      

  );
}

export default Proyectos;