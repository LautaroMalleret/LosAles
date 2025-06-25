import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Producto } from "../types/producto";
export { CarritoContext };

// Definimos las interfaces para el carrito y los productos
// ProductoCarrito extiende Producto y añade la cantidad
// CarritoContextType define las funciones y el estado del carrito
// CarritoProvider es el componente que provee el contexto a la aplicación

interface ProductoCarrito extends Producto {
  cantidad: number;
}

interface CarritoContextType {
  carrito: ProductoCarrito[];
  agregarAlCarrito: (producto: Producto, cantidad: number) => void;
  eliminarDelCarrito: (id: string) => void;
  actualizarCantidad: (id: string, cantidad: number) => void;
}

const CarritoContext = createContext<CarritoContextType | undefined>(undefined);

// Componente proveedor del contexto del carrito
// Este componente envuelve la aplicación y provee el estado del carrito y las funciones para manipularlo
// Los hijos de este componente tendrán acceso al carrito y sus funciones
export function CarritoProvider({ children }: { children: ReactNode }) {
  const [carrito, setCarrito] = useState<ProductoCarrito[]>([]);

  // Inicializamos el carrito como un array vacío
  // y definimos las funciones para manipularlo
  const agregarAlCarrito = (producto: Producto, cantidad: number) => {
    setCarrito((prev) => {
      const existe = prev.find((p) => p._id === producto._id);
      if (existe) {
        return prev.map((p) =>
          p._id === producto._id
            ? { ...p, cantidad: Math.min(p.cantidad + cantidad, p.stock) }
            : p
        );
      }
      return [...prev, { ...producto, cantidad }];
    });
  };

  // Funciones para manipular el carrito
  const eliminarDelCarrito = (id: string) => {
    setCarrito((prev) => prev.filter((p) => p._id !== id));
  };

  // Actualiza la cantidad de un producto en el carrito
  // Asegura que la cantidad esté entre 1 y el stock disponible
  // Si la cantidad es menor a 1, se establece en 1
  // Si la cantidad es mayor al stock, se establece en el stock máximo
  const actualizarCantidad = (id: string, cantidad: number) => {
    setCarrito((prev) =>
      prev.map((p) =>
        p._id === id ? { ...p, cantidad: Math.min(Math.max(1, cantidad), p.stock) } : p
      )
    );
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarAlCarrito, eliminarDelCarrito, actualizarCantidad }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

// Hook para acceder al contexto del carrito
// Este hook permite a los componentes acceder fácilmente al carrito y sus funciones
export function useCarrito() {
  const context = useContext(CarritoContext);
  if (!context) throw new Error("useCarrito debe usarse dentro de CarritoProvider");
  return context;
}

