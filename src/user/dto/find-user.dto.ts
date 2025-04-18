import { IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class FindUserDto {
    @Type(() => Number) // cast the incoming string to a number
    @IsInt() // Then class-validator runs the @IsInt() and @Min(1) checks
    @Min(1)
    id: number;
}
