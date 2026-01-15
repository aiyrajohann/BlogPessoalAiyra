import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./componentes/navbar/Navbar";
import Footer from "./componentes/footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/login/login"; 
import Cadastro from "./pages/cadastro/cadastro";


function App() {
  return (
 <>
 <BrowserRouter>    
  <Navbar />
  <div className="min-h-[80vh]">
    <Routes>
      <Route path="/" element={<Login />} />  
      <Route path="/Home" element={<Home />} />
      <Route path="/Cadastro" element={<Cadastro />} />
    </Routes>
  </div>  
  <Footer />
 </BrowserRouter>
 </>
  )
}

export default App;