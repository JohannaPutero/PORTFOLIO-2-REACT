import './App.css';
import Header from './componentes/Header';
import Main from './componentes/Main';
import Descripcion from './componentes/Descripcion';
import Educacion from './componentes/Educacion';
import Proyectos from './componentes/Proyectos';
import Contacto from './componentes/Contacto';


 function App() {
  return (

    <div className="App">

      <Header/>; 
      <Main/>;
      <Descripcion/>;
      <Educacion/>;
      <Proyectos/>;
      <Contacto/>;
         
    </div>
  );
}

export default App; 
