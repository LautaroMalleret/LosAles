import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Carrito from "./pages/Carrito";
import { CarritoProvider } from "./context/CarritoContext";
import ComoComprar from "./pages/ComoComprar";
import Footer from "./components/Footer";

// App principal que define las rutas y el contexto del carrito
// Utiliza React Router para manejar la navegación entre páginas
// El CarritoProvider envuelve la aplicación para proporcionar el contexto del carrito de compras
// Incluye un Navbar y un Footer para la navegación y el pie de página
function App() {
  return (    
  <div className="min-h-screen flex flex-col">
  
    <CarritoProvider>
        <Navbar />
        <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/como-comprar" element={<ComoComprar />}/>
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
        </main>
       <Footer />
    </CarritoProvider>
  </div>
  );
}

export default App;
