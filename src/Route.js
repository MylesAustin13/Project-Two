
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './pages/RegisterPage/Register';
import Products from './components/Products';
import Login from './components/Login/Login';
import Checkout from './pages/CheckoutPage';
import OrderConfirm from './pages/OrderConfirm';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { GlobalStyle } from './globalStyle';


const Routes = () => {
    return (
        <BrowserRouter>
             {/* <GlobalStyle /> */}
            {/* <Navbar />
            <Sidebar />
            <Routes>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/checkout" component={Checkout} />
                <Route exact path="/confirm" component={OrderConfirm} />
            </Routes>
            <Footer /> */}
        </BrowserRouter>
    )
}
export default Routes;