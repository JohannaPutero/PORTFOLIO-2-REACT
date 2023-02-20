# Portfolio

Esta aplicación ha sido creada con React.

## Available Scripts

En la terminal del proyecto puede ejecutar:

### `npm start`

Ejecuta la aplicación en el modo de desarrollo.\
Abra [http://localhost:3000](http://localhost:3000) para verlo en su navegador.

# GitHub

Puede encontrar el proyecto en https://github.com/JohannaPutero/PORTFOLIO-2-REACT

# Deploy

Puede ver el proyecyo deployado en el siguiente link: https://portfolio-2-react.vercel.app/

# Descripcion

El diseño de la aplicación ha sido inspirado en el siguiente portfolio: https://www.behance.net/gallery/157263277/Portofolio-web-Frontend-developer-inspired/modules/887227397 publicado en  https://www.behance.net/ . Cuenta con información personal. Es de la forma landing page y permite scrollear por varias secciones. Se ha buscado que para la visualización en escritorio cada seccion ocupe la totalidad de la pantalla.
Se ha probado en diferentes dispositivos con distintas resoluciones desarrollandolo de forma responsive (mediante media queries).

# Secciones

## Header

Cuenta con un navegador que redirecciona a las diferentes secciones del proyecto. Los botones cuentan con efecto Hover (consiste en la alteración del aspecto de un elemento de la interfaz gráfica​ cuando se sitúa el puntero sobre el mismo, pero no se ha seleccionado aún). Para dispositivos de resoluciones menores a 700 px de ancho se transforma en un menú hamburguesa que permite desplegarlo mediante el evento de JavaScript "onclick" (este ejecuta una función cuando se le da clic a un elemento).

## Main

Contiene la primer visualización que hará el usuario. Cuenta con una breve presentación y un botón que redirecciona a la sección "contacto". Se le ha dado animaciones de traslación con @keyframes y también efecto Hover. Contiene también un botón que redirecciona a la sección "sobre mí". 

## Descripcion

 Cuenta con una breve descripción y un botón que redirecciona a la sección "educacion". Se le ha dado animaciones de traslación y aparición con @keyframes y también efecto Hover. La imagen puede agrandarse al pasar el cursor por ella.

## Educacion

Contiene una línea temporal que indica los estudios realizados con sus respectivos años de inicio. Contiene un botón que redirecciona a la sección "proyectos". 

## Proyectos

Contiene solo a modo ilustrativo tres proyectos. Se le ha dado rotación a las tarjetas mediante el efeco Hover. En caso querer linkear las tarjetas con proyectos reales puede agregarse la etiqueta "a" redireccionandolo a sus respectivas url.
Contiene un botón que desplaza hacia la sección "contacto". 

## Contacto

Cuenta con un formulario de contacto al cual se le ha dado funcionalidad mediante la API "FormSubmit" : https://formsubmit.co/, que permite al usuario cargar los datos de contacto y su mensaje y enviarlos a la casilla de mail especificada por el programador.
Contiene también íconos que redireccionan a diferentes redes sociales.
Cuenta con un botón con efecto hover que desplaza hacia la sección "Main". 


# Herramientas utilizadas: 

- ColorZilla para respetar los colores del diseño: https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp

- Bootstrap Icons para los iconos: https://icons.getbootstrap.com/

- Google Fonts para la tipografía: https://fonts.google.com/

- Pexels para imagenes: https://www.pexels.com/

- API "FormSubmit" para formulario: https://formsubmit.co/

- Vercel para deploy: https://vercel.com/


## Autora: Johanna Belén Putero.

