import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class VueloDTO {
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsString()
  readonly numero_vuelo: String;
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsString()
  readonly origen: String;
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsNumber()
  readonly destino: String;
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsString()
  readonly fecha_salida: Number;
 
}
