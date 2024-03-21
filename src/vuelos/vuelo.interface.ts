export interface IVuelo extends Document {
    id: string;
    numero_vuelo: string;
    origen: string;
    destino: string;
    fecha_salida: Number;
}
