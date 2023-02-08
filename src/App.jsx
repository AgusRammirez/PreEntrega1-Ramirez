import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <div className='container'>
     <NavBar/>
     <ItemListContainer greeting="Bienvenidos"/>
    </div>
  )
}

export default App;
