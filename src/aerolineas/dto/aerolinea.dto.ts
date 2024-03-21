import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class AerolineaDTO {
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsString()
  readonly nombre: string;
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsString()
  readonly pais: string;
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsNumber()
  readonly flota: number;
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsString()
  readonly alianzas: string; 
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsString()
  readonly ruta: string; 
  
}
