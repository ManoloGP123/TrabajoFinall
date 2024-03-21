import { Module } from '@nestjs/common';
import { VuelosController } from './vuelos.controller';
import { VuelosService } from './vuelos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VUELO } from 'src/models/models';
import { VueloSchema } from './schema/vuelo.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: VUELO.name,
        useFactory: () => {
          return VueloSchema;
        },
      },
    ]),
  ],
  controllers: [VuelosController],
  providers: [VuelosService],
})
export class VuelosModule {}
