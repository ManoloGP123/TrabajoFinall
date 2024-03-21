import mongoose from 'mongoose';

export const VueloSchema = new mongoose.Schema(
  {
    numero_vuelo: { type: String, required: true, unique: true }, // Índice único para número de vuelo
    origen: { type: String, required: true },
    destino: { type: String, required: true },
    fecha_salida: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Vuelo', VueloSchema);

