import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import { theme } from './shared/utils/theme';
import HomePage from './pages/Home.page';
import CartPage from './pages/Cart.page';
import RegisterPage from './pages/Register.page';
import SigninPage from './pages/Signin.page';
import PrivateRoute from './features/auth/components/PrivateRoute';

import { store } from './store';
import UserPage from './pages/User.page';
import AddressPage from './pages/Address.page';
import AllProducts from './pages/AllProducts.page';
import CheckOutPage from './pages/CheckOut.page';
import AboutPage from './pages/About.page';
import FAQPage from './pages/FAQ.page';
import FavoritesPage from './pages/Favorites.page';
import WineTastingPage from './pages/WineTasting.page';
import UserEditPage from './pages/UserEdit.page';
import AddAddressPage from './pages/AddAddress.page';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<PrivateRoute page={<HomePage />} />} />
          <Route path='/collections' element={<AllProducts />} />
          <Route path='/user' element={<PrivateRoute page={<UserPage />} />} />
          <Route path='/cart' element={<PrivateRoute page={<CartPage />} />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/signin' element={<SigninPage />} />
          <Route path='/address' element={<AddressPage />} />
          <Route path='/checkout' element={<CheckOutPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/faq' element={<FAQPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
          <Route path='/addaddress' element={<AddAddressPage />} />
          <Route path='/tasting' element={<WineTastingPage />} />
          <Route path='/account' element={<UserEditPage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

type CypressWindow = Window & typeof globalThis & { Cypress: any; store: any };

const thisWindow = window as CypressWindow;

if (thisWindow.Cypress) {
  console.log('CYPRESS WINDOW');

  thisWindow.store = store;
}

export default App;
