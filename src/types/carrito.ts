import type { Producto } from "./producto";

//definimos la interfaz para un producto en el carrito
// Incluye el producto y la cantidad seleccionada
// Esta interfaz se utiliza para manejar los productos en el carrito de compras
export interface ItemCarrito {
  producto: Producto;
  cantidad: number;
}
