import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Products from './Pages/Products/Products';
import ProductsInfo from './Pages/ProductsInfo/ProductsInfo';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyOrders from './Pages/MyOrders/MyOrders';
import Pay from './Pages/Pay/Pay';
import Review from './Pages/Review/Review';
import Homereview from './Pages/HomeReview/Homereview';
import MakeAdmin from './Pages/MakeAdmin/MakeAdmin';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
import AddProduct from './Pages/AddProduct/AddProduct';
import ManageProducts from './Pages/ManageProducts/ManageProducts';

function App() {
  return (
    <div >
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/products'>
              <Products></Products>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/registration'>
              <Register></Register>
            </Route>
            <Route path='/myorders'>
              <MyOrders></MyOrders>
            </Route>
            <Route path='/pay'>
              <Pay></Pay>
            </Route>
            <Route path='/review'>
              <Review></Review>
            </Route>
            <Route path='/makeadmin'>
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path='/homereview'>
              <Homereview></Homereview>
            </Route>
            <PrivateRoute path='/productsInfo/:productId'>
              <ProductsInfo></ProductsInfo>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <Dashboard> </Dashboard>
            </PrivateRoute>
            <PrivateRoute path='/manageallorders'>
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute path='/addproduct'>
              <AddProduct></AddProduct>
            </PrivateRoute>
            <PrivateRoute path='/manageproducts'>
              <ManageProducts></ManageProducts>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>

  );
}

export default App;
