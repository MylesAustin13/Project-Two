import {BrowserRouter, Route}from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import RegisterPage from './pages/RegisterPage';


const Routes = () => {
    return(
        <BrowserRouter>
            {/* <Route path="/" component={HomePage} />
            <Route path="/products" component={ProductPage} />
            <Route path="/register" component={RegisterPage} /> */}
            {/* <Route path="/" component={HomePage} />
            <Route path="/" component={HomePage} /> */}
        </BrowserRouter>
    )
}