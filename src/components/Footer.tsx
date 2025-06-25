import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { INSTAGRAM_URL, WHATSAPP_NUM } from "../config";
//footer de la pagina
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col items-center gap-4 text-sm text-center sm:flex-row sm:justify-between sm:text-left">
        {/* Marca / derechos */}
        <div>
          <p className="font-semibold">
            &copy; {new Date().getFullYear()} Los Ales
          </p>
          <p className="text-xs text-gray-400">Todos los derechos reservados</p>
        </div>

        {/* Redes sociales */}
        <div className="flex gap-4">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
            title="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>

          <a
            href={'https://wa.me/' + WHATSAPP_NUM }
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
            title="WhatsApp"
          >
            <FaWhatsapp className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
