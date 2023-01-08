/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateStudentDto{
  @IsString()
  @MaxLength(20)
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @MaxLength(20)
  @IsNotEmpty()
  readonly lastName: string;
  @IsString()
  @MaxLength(20)
  @IsNotEmpty()
  readonly role: string;

}
