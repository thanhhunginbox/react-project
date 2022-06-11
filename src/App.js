/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from './logo.svg';
import './App.css';

import { 
    // Link,
     Route
    , Routes } from 'react-router-dom';
import Shop from './components/Shop/Shop';
import Item from './components/Item/Item';
import Login from './components/login';
import Test from './components/Test';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AddProduct from './components/AddProduct/AddProduct';
import Orders from './components/YourOrders/Orders';
import OrderSuccess from './components/YourOrders/OrderSuccess';

  
function App() {
    // const [user, setUser] = useState(null);
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Shop />} />
                <Route path="/:name" element={<Item/>} />
                <Route path="login" element={<Login username="amTrinh" />} />
                <Route path="test" element={<Test />}/>
                <Route path="/addproduct" element={<AddProduct/>}/>
                <Route path="/orders" element={<Orders/>}/>
                <Route path="/success" element={<OrderSuccess/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
