import './App.css';

import './css/prodcts.css'

import AppRouter from './routes/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function App() {

  return (
    <>
      <PayPalScriptProvider options={{ "client-id": "AZJ7rVG8aY2PkdLBCNDKAg13UU_sHLjrb_zP-qLJ-F0xOp4W6mdohswTZQoJMjgzqA_fzwI79GlSQkDU" }}>
        <BrowserRouter>
          <Navbar />
          <AppRouter />
          <Footer />
        </BrowserRouter>
      </PayPalScriptProvider>
    </>
  );
}

export default App;
