/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateStudentDto{
  @ApiProperty()
  @IsString()
  @MaxLength(20)
  @IsNotEmpty()
  readonly name: string;
  @ApiProperty()
  @IsString()
  @MaxLength(20)
  @IsNotEmpty()
  readonly lastName: string;
  @ApiProperty()
  @IsString()
  @MaxLength(20)
  @IsNotEmpty()
  readonly role: string;

}
