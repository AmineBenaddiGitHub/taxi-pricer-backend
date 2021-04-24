import { IsNumber, IsDateString } from 'class-validator';

export class RideDto {
  @IsNumber()
  public distance: number;

  @IsDateString()
  public startTime: string;
}
