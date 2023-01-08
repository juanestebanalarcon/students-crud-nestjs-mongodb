/* eslint-disable prettier/prettier */
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Student {
  @Prop()
  name: string;
  @Prop()
  lastName: string;
  @Prop()
  role: string;
}
export const StudentSchema = SchemaFactory.createForClass(Student);
