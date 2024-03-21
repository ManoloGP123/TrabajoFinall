import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VUELO } from 'src/models/models';
import { IVuelo } from './vuelo.interface';
import { VueloDTO } from './dto/vuelo.dto';

@Injectable()
export class VuelosService {
  constructor(@InjectModel(VUELO.name) private readonly modelo: Model<IVuelo>) {}

  async insertar(vueloDTO: VueloDTO): Promise<IVuelo> {
    const newVuelo = new this.modelo(vueloDTO);
    return await newVuelo.save();
  }

  async todos(): Promise<IVuelo[]> {
    return await this.modelo.find();
  }

  async uno(id: string): Promise<IVuelo> {
    return await this.modelo.findById(id);
  }

  async actualizar(id: string, vueloDTO: VueloDTO): Promise<IVuelo> {
    return await this.modelo.findByIdAndUpdate(id, vueloDTO, { new: true });
  }

  async eliminar(id: string): Promise<void> {
    await this.modelo.findByIdAndDelete(id);
  }
}

