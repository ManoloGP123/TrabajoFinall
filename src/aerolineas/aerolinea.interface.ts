export interface IAerolinea extends Document {
    id: string | number;
    nombre: string;
    pais: string;
    flota: number;
    alianzas: string;
    ruta: string;
}
