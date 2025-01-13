import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";


import Header from './components/Header'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Carousell from './components/Carousel';

function App() {

  return (
    <>
      <Header />
      <Banner />
      <Carousell />
      <Footer />
    </>
  )
}

export default App