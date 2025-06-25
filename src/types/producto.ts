//define la estructura de un producto
// Esta interfaz se utiliza para tipar los productos que se manejan en la aplicación al igual que en el backend
export interface Producto {
  _id: string;
  nombre: string;
  precio: number;
  color: string;
  descripcion: string;
  tipo: "ropa" | "accesorio" | "calzado";
  imagenes: string[];
  stock: number;
  destacado: boolean;
  ropa?: {
    tipoPrenda: string;
    talle: string[];
  };
  calzado?: {
    talle: number[];
  };
}
