import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { ContextProvider } from './Components/utils/global.context'

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Navbar/>
          <main>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/dentist/:id" element={<Detail/>} />
              <Route path="/favs" element={<Favs/>} />
            </Routes>
          </main>
          <Footer/>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
