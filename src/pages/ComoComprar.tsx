import {
  ShoppingCart,
  ClipboardCheck,
  MessageCircle,
  Package,
} from "lucide-react";

//pagina que explica cómo comprar en la tienda
// Muestra los pasos a seguir para realizar una compra
// Cada paso tiene un icono y una breve descripción
// Utiliza Tailwind CSS para el estilo y Lucide Icons para los iconos
export default function ComoComprar() {
  return (
    <div className="p-6 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-700">
        ¿Cómo comprar?
      </h1>

      <div className="space-y-8">
        {/* Paso 1 */}
        <div className="flex items-start gap-4 bg-white rounded-xl shadow p-4">
          <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
            <ShoppingCart size={28} />
          </div>
          <div>
            <h2 className="text-xl font-semibold">1. Elegí tus productos</h2>
            <p className="text-gray-600">
              Navegá por el catálogo y hacé clic en "Agregar al carrito" en tus
              productos seleccionados.
            </p>
          </div>
        </div>

        {/* Paso 2 */}
        <div className="flex items-start gap-4 bg-white rounded-xl shadow p-4">
          <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
            <ClipboardCheck size={28} />
          </div>
          <div>
            <h2 className="text-xl font-semibold">2. Revisá tu carrito</h2>
            <p className="text-gray-600">
              En la seccion "Carrito" podés previsualizar tu compra antes de finalizar
            </p>
          </div>
        </div>

        {/* Paso 3 */}
        <div className="flex items-start gap-4 bg-white rounded-xl shadow p-4">
          <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
            <MessageCircle size={28} />
          </div>
          <div>
            <h2 className="text-xl font-semibold">3. Realizá tu pedido</h2>
            <p className="text-gray-600">
              Hacé clic en el botón "Pedir" y, para una atencion más personalizada, te redireccionaremos a WhatsApp con tu pedido listo para enviar.
              <br />
              <span className="text-sm italic text-gray-500">
                Para elegir el color y el talle de las prendas, por favor aclararlo en el mensaje
              </span>
            </p>
          </div>
        </div>

        {/* Paso 4 */}
        <div className="flex items-start gap-4 bg-white rounded-xl shadow p-4">
          <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
            <Package size={28} />
          </div>
          <div>
            <h2 className="text-xl font-semibold">4. Coordinamos la entrega</h2>
            <p className="text-gray-600">
              Por privado acordamos los detalles de la entrega.
              <br />

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
