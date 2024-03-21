import { Module } from '@nestjs/common';
import { AerolineasController } from './aerolineas.controller';
import { AerolineasService } from './aerolineas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AEROLINEA } from 'src/models/models';
import { AerolineaSchema } from './schema/producto.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([ 
      {
        name: AEROLINEA.name,
        useFactory: () => {
          return AerolineaSchema;
        },
      },
    ]),  
  ],
  controllers: [AerolineasController],
  providers: [AerolineasService],
})
export class AerolineasModule {}
