/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

export interface IStudent extends Document {
  readonly name: string;
  readonly lastName: string;
  readonly role: string;
}
