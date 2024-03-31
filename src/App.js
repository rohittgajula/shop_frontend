import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScrean from './screens/HomeScrean';
import ProductScreen from './screens/ProductScreen';


function App() {
  return (
      <Router>
        <Header />
        <main className='py-3'>
          <Container>
            <Routes>
              <Route path='/' element={<HomeScrean/>} exact />
              <Route path='/product/:id' element={<ProductScreen/>} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
  );
}

export default App;
