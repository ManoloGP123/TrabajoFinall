import mongoose from 'mongoose';



export const AerolineaSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, unique: true },
    pais: { type: String, required: true },
    flota: { type: Number, required: true },
    alianzas: { type: String, required: true },
    rutas: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

AerolineaSchema.index({ pais: 1 });

export default mongoose.model('Aerolinea', AerolineaSchema);

