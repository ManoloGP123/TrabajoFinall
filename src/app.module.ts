import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { VuelosModule } from './vuelos/vuelos.module';
import { AerolineasModule } from './aerolineas/aerolineas.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.uri_mongo),
    VuelosModule,
    AerolineasModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

