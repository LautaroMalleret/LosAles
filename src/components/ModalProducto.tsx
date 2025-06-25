import { useState } from "react";
import type { Producto } from "../types/producto";
//modal para mostrar los detalles de un producto cuando se hace clic en un producto del catálogo
interface Props {
  producto: Producto;
  onClose: () => void;
  onAgregar: (cantidad: number) => void;
}

export default function ProductoModal({ producto, onClose, onAgregar }: Props) {
  const [cantidad, setCantidad] = useState(1);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(producto.imagenes[0]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-full overflow-y-auto p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-xl"
          aria-label="Cerrar"
        >
          &times;
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Galería de imágenes */}
          <div>
            <img
              src={imagenSeleccionada}
              alt="Imagen principal"
              className="w-full h-64 object-cover rounded border mb-3"
            />
            {producto.imagenes.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {producto.imagenes.map((url, idx) => (
                  <img
                    key={idx}
                    src={url}
                    alt={`Miniatura ${idx + 1}`}
                    onClick={() => setImagenSeleccionada(url)}
                    className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${
                      url === imagenSeleccionada ? "border-blue-600" : "border-gray-300"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Info del producto */}
          <div>
            <h2 className="text-2xl font-bold mb-2">{producto.nombre}</h2>
            <p className="mb-1"><strong>Precio:</strong> ${producto.precio}</p>
            <p className="mb-1"><strong>Tipo:</strong> {producto.tipo}</p>
            <p className="mb-1"><strong>Color:</strong> {producto.color}</p>

            {/* Mostrar talles si aplica */}
{producto.tipo === "ropa" && producto.ropa?.talle && (
  <div className="mb-2">
    <strong>Talles disponibles:</strong>{" "}
    <span>{producto.ropa.talle.join(", ")}</span>
  </div>
)}

{producto.tipo === "calzado" && producto.calzado?.talle && (
  <div className="mb-2">
    <strong>Talles disponibles:</strong>{" "}
    <span>{producto.calzado.talle.join(", ")}</span>
  </div>
)}
            <p className="mb-1"><strong>Stock:</strong> {producto.stock}</p>
            <p className="mb-4"><strong>Descripción:</strong> {producto.descripcion}</p>


            <div className="flex items-center gap-3 mb-6">
              <label htmlFor="cantidad" className="font-semibold">
                Cantidad:
              </label>
              <input
                id="cantidad"
                type="number"
                min={1}
                max={producto.stock}
                value={cantidad}
                onChange={(e) => {
                  const val = Math.max(1, Math.min(Number(e.target.value), producto.stock));
                  setCantidad(val);
                }}
                className="border rounded p-1 w-16 text-center"
              />
            </div>

            <button
              onClick={() => onAgregar(cantidad)}
              disabled={producto.stock === 0}
              className={`w-full py-2 rounded text-white font-semibold ${
                producto.stock === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {producto.stock === 0 ? "Sin stock" : "Agregar al carrito"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


