import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCarrito } from "../context/CarritoContext";

//navbar de la pagina
// muestra los enlaces a las diferentes secciones y el carrito de compras
export default function Navbar() {
  const { carrito } = useCarrito();
  const location = useLocation();

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center sticky top-0 z-50">
      <div className="flex gap-4">
        <Link
          to="/"
          className={`font-semibold ${
            location.pathname === "/" ? "text-blue-600" : "text-gray-700"
          }`}
        >
          Inicio
        </Link>
        <Link
          to="/contacto"
          className={`font-semibold ${
            location.pathname === "/contacto"
              ? "text-blue-600"
              : "text-gray-700"
          }`}
        >
          Contacto
        </Link>
        <Link to="/como-comprar" className="hover:underline">
          ¿Cómo comprar?
        </Link>
      </div>
      <Link
        to="/carrito"
        className="relative bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded flex items-center gap-2"
      >
        <ShoppingCart size={20} />
        {carrito.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs px-1">
            {carrito.reduce((acc, item) => acc + item.cantidad, 0)}
          </span>
        )}
        Carrito
      </Link>
    </nav>
  );
}
