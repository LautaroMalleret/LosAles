import { FaWhatsapp } from "react-icons/fa";
import banner from "../assets/banner.jpeg";
import { WHATSAPP_NUM } from "../config";

//pagina de contacto
// Muestra un banner y un mensaje de contacto
// Incluye un enlace a WhatsApp para realizar pedidos
// Utiliza Tailwind CSS para el estilo y React Icons para los iconos
export default function Contacto() {
  return (
    <div>
      <img
        src={banner}
        alt="Banner de contacto"
        className="w-full max-w-full sm:max-w-3xl sm:mx-auto  object-cover mb-6 rounded"
      ></img>
      <div className=" mx-auto mt-8 text-center">
        <h4 className="text-xl mb-4 ">
          Somos <b>ALE</b> y <b>ALE</b>,
        </h4>
        <div className="text-l mb-4">
          y les ofrecemos la <b>MEJOR</b> indumentaria,<br></br>
          al <b>MEJOR</b> precio, <br></br>
          para toda la familia, en un solo lugar.<br></br>
          Nos encontramos en Hurlingham, Buenos Aires, Argentina.<br></br>
          <b>¡No dudes en contactarnos!</b>
        </div>

        <a
          href={
            "https://wa.me/" +
            WHATSAPP_NUM +
            "?text=Hola,%20quiero%20hacer%20un%20pedido."
          }
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow"
        >
          <FaWhatsapp className="w-5 h-5" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
