import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer";
import ProductList from './components/ProductList';

function App() {
const data = [
  {
    title: "producto 1",
    price: 4000,
    id: 1,
    rating: 5
  },
  {
    title: "producto 2",
    price: 4000,
    id: 2,
    rating: 1
  },
  {
    title: "producto 3",
    price: 4000,
    id: 3,
    rating: 3
  },
  {
    title: "producto 4",
    price: 4000,
    id: 4,
    rating: 4
  }
]
const saludar=(nombre)=>{
  console.log("Hola " + nombre)
}
  return (
    <div className='container'>
     <NavBar/>
     <ItemListContainer greeting="Bienvenidos"/>
     <ProductList products={data}/>
     <button onClick={()=> saludar("juan")}>Clickeame</button>
    </div>
  )
}

export default App;
