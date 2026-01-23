import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./componentes/footer/Footer";
import Navbar from "./componentes/navbar/Navbar";
import Home from "./pages/home/Home";
import Cadastro from "./pages/cadastro/Cadastro";
import Login from "./pages/login/Login";
import { AuthProvider } from "./contexts/AuthContext";
import ListaTemas from "./componentes/tema/listatema/ListaTema";
import FormTema from "./componentes/tema/formtema/FormTema";
import DeletarTema from "./componentes/tema/deletartema/DeletarTema";
import FormPostagem from "./componentes/postagem/formpostagem/FormPostagem";
import ListaPostagens from "./componentes/postagem/listapostagem/ListaPostagens";
import DeletarPostagem from "./componentes/postagem/deletarpostagem/DeletarPostagem";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastrartema" element={<FormTema />} />
              <Route path="/editartema/:id" element={<FormTema />} />
              <Route path="/deletartema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastrarpostagem" element={<FormPostagem />} />
              <Route path="/editarpostagem/:id" element={<FormPostagem />} />
              <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
