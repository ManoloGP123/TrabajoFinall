import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AEROLINEA } from 'src/models/models';
import { IAerolinea } from './aerolinea.interface';
import { AerolineaDTO } from './dto/aerolinea.dto';

@Injectable()
export class AerolineasService {
  constructor(@InjectModel(AEROLINEA.name) private readonly modelo: Model<IAerolinea>) {}

  async insertar(aerolineaDTO: AerolineaDTO): Promise<IAerolinea> {
    const newAerolinea = new this.modelo(aerolineaDTO);
    return await newAerolinea.save(); 
  } 

  async todos(): Promise<IAerolinea[]> {
    return await this.modelo.find();
  }

  async uno(id: string): Promise<IAerolinea> {
    return await this.modelo.findById(id);
  }

  async actualizar(id: string, aerolineaDTO: AerolineaDTO): Promise<IAerolinea> {
    return await this.modelo.findByIdAndUpdate(id, aerolineaDTO, { new: true });
  }

  async eliminar(id: string): Promise<void> {
    await this.modelo.findByIdAndDelete(id);
  }
}

