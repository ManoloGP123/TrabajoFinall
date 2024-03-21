import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { AerolineasService } from './aerolineas.service';
import { AerolineaDTO } from './dto/aerolinea.dto'; 

@Controller('aerolineas')
export class AerolineasController {
  constructor(private aerolineasService: AerolineasService) {} 

  @Post()
  insertar(@Body() AerolineaDTO: AerolineaDTO) { 
    return this.aerolineasService.insertar(AerolineaDTO);
  }
  @Get()
  todos () {
    return this.aerolineasService.todos();
    
  }

  @Get(':id')
  uno(@Param('id') id: string) {
    return this.aerolineasService.uno(id);
  }

  @Put(':id')
  actualizar(@Param('id') id: string, @Body() aerolineaDTO: AerolineaDTO) {
    return this.aerolineasService.actualizar(id, aerolineaDTO);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.aerolineasService.eliminar(id);
  }

  
}
