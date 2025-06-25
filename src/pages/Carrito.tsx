import {  useCarrito } from "../context/CarritoContext";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { WHATSAPP_NUM } from "../config";

// pagina del carrito de compras
// muestra los productos agregados al carrito, permite actualizar cantidades y eliminar productos
// permite enviar el pedido por WhatsApp
// permite seguir comprando
// permite ver el total del pedido
export default function Carrito() {
  const { carrito, actualizarCantidad, eliminarDelCarrito } =
    useCarrito();

  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );
// Genera el mensaje para enviar por WhatsApp
// El mensaje incluye los productos del carrito, sus cantidades y el total
  const generarMensajeWhatsApp = () => {
    const mensaje = carrito
      .map(
        (item) =>
          `• ${item.nombre} x ${item.cantidad} = $${
            item.precio * item.cantidad
          }`
      )
      .join("\n");

    return encodeURIComponent(
      `Hola! Quisiera pedir:\n\n${mensaje}\n\nTotal: $${total}`
    );
  };

  const linkWhatsApp = "https://wa.me/"+WHATSAPP_NUM+"?text="+generarMensajeWhatsApp(); // Cambiá el número por el del admin
  const navigate = useNavigate();
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Tu carrito</h1>

      {carrito.length === 0 ? (
        <p className="text-center text-gray-600">El carrito está vacío.</p>
      ) : (
        <>
          <div className="space-y-4">
            {carrito.map((item) => (
              <div
                key={item._id}
                className="bg-white shadow p-4 rounded flex items-center gap-4"
              >
                <img
                  src={item.imagenes[0]}
                  alt={item.nombre}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h2 className="font-semibold text-lg">{item.nombre}</h2>
                  <p className="text-sm text-gray-600">${item.precio} c/u</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() =>
                        actualizarCantidad(item._id, item.cantidad - 1)
                      }
                      disabled={item.cantidad === 1}
                    >
                      -
                    </button>
                    <span>{item.cantidad}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() =>
                        actualizarCantidad(item._id, item.cantidad + 1)
                      }
                      disabled={item.cantidad >= item.stock}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => eliminarDelCarrito(item._id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right">
            <p className="text-lg font-bold">Total: ${total}</p>
            </div>
            <div className="mt-6 text-center ">

            <button
              onClick={() => navigate("/")}
              className="mx-1  px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
            >
              Seguir comprando
            </button>

            <a
              href={linkWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-1 inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </>
      )}
    </div>
  );
}
