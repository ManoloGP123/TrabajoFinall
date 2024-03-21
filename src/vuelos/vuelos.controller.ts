import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { VuelosService } from './vuelos.service';
import { VueloDTO } from './dto/vuelo.dto';

@Controller('vuelos')
export class VuelosController {
  constructor(private vuelosService: VuelosService) {}

  @Post()
  insertar(@Body() VueloDTO: VueloDTO) {
    return this.vuelosService.insertar(VueloDTO);
  }
  @Get()
  todos () {
    return this.vuelosService.todos();
    
  }

  @Get(':id')
  uno(@Param('id') id: string) {
    return this.vuelosService.uno(id);
  }

  @Put(':id')
  actualizar(@Param('id') id: string, @Body() vueloDTO: VueloDTO) {
    return this.vuelosService.actualizar(id, vueloDTO);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.vuelosService.eliminar(id);
  }


}
