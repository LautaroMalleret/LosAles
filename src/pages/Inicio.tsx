import { useEffect, useState } from "react";
import ProductoModal from "../components/ModalProducto";
import type { Producto } from "../types/producto";
import { useCarrito } from "../context/CarritoContext";
import banner from "../assets/banner.jpeg"; // Asegúrate de que la ruta sea correcta

// Página de inicio que muestra los productos disponibles
// Permite filtrar por tipo de producto y nombre
// Al hacer clic en un producto, se abre un modal con más detalles y la opción de agregar al carrito
// El modal permite seleccionar la cantidad y ver imágenes del producto
export default function Inicio() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [filtroTipo, setFiltroTipo] = useState<string>("");
  const [filtroNombre, setFiltroNombre] = useState<string>("");
  const [productoSeleccionado, setProductoSeleccionado] =
    useState<Producto | null>(null);
  const { agregarAlCarrito } = useCarrito();
  const [filtroPrenda, setFiltroPrenda] = useState("");

  // Traer productos del backend con filtros
  useEffect(() => {
    async function fetchProductos() {
      try {
        const query = new URLSearchParams();
        if (filtroTipo) query.append("tipo", filtroTipo);
        if (filtroTipo === "ropa" && filtroPrenda) {
          query.append("tipoPrenda", filtroPrenda);
        }
        if (filtroNombre) query.append("nombre", filtroNombre);

        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/productos?${query.toString()}`
        );
        console.log(res);
        const data = await res.json();
        setProductos(data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    }
    fetchProductos();
  }, [filtroTipo, filtroNombre, filtroPrenda]);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <img
        src={banner}
        alt="Banner de contacto"
        className="w-full max-w-full sm:max-w-3xl sm:mx-auto  object-cover mb-6 rounded"
      ></img>
      <h1 className="text-3xl font-bold mb-6 text-center">Productos</h1>

      {/* Filtros */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center">
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={filtroNombre}
          onChange={(e) => setFiltroNombre(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/3"
        />
        <select
          value={filtroTipo}
          onChange={(e) => {
            setFiltroTipo(e.target.value);
            setFiltroPrenda("");
          }}
          className="border p-2 rounded w-full sm:w-1/4"
        >
          <option value="">Todos los tipos</option>
          <option value="ropa">Ropa</option>
          <option value="calzado">Calzado</option>
          <option value="accesorio">Accesorio</option>
        </select>
        {filtroTipo === "ropa" && (
          <select
            value={filtroPrenda}
            onChange={(e) => setFiltroPrenda(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">Todas las prendas</option>
            <option value="remera">Remeras</option>
            <option value="buzo">Buzos</option>
            <option value="campera">Camperas</option>
            <option value="pantalon">Pantalones</option>
            <option value="ropa interior">Ropa interior</option>
          </select>
        )}
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productos.map((prod) => (
          <div
            key={prod._id}
            onClick={() => setProductoSeleccionado(prod)}
            className="cursor-pointer border rounded shadow hover:shadow-lg transition p-4 flex flex-col"
          >
            <img
              src={prod.imagenes[0] || "/placeholder.png"}
              alt={prod.nombre}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="font-semibold text-lg">{prod.nombre}</h2>
            <p className="text-gray-600">${prod.precio}</p>
            <p className="text-sm text-gray-500 capitalize">{prod.tipo}</p>
          </div>
        ))}
      </div>

      {/* Modal producto */}
      {productoSeleccionado && (
        <ProductoModal
          producto={productoSeleccionado}
          onClose={() => setProductoSeleccionado(null)}
          onAgregar={(cantidad) => {
            if (productoSeleccionado) {
              agregarAlCarrito(productoSeleccionado, cantidad);
            }
            setProductoSeleccionado(null);
          }}
        />
      )}
    </div>
  );
}
