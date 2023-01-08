import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IStudent } from 'src/Interfaces/student.interface';
import { CreateStudentDto } from '../../Dtos/create-student.dto';
import { UpdateStudentDto } from 'src/Dtos/update-student.dto';
/* eslint-disable prettier/prettier */
@Injectable()
export class StudentService {
  constructor(@InjectModel('Student') private studentModel: Model<IStudent>) {}

  async createStudent(createStudentDTO: CreateStudentDto): Promise<IStudent> {
    const newStudent = await new this.studentModel(createStudentDTO);
    return newStudent.save();
  }

  async updateStudent(studentId: string, updateStudentDTO: UpdateStudentDto): Promise<IStudent> {
    const currentStudent = await this.studentModel.findByIdAndUpdate(
      studentId,
      updateStudentDTO,
      { new: true },
    );
    if(!currentStudent){
        throw new NotFoundException(`Student ${studentId} not found`);
    }
    return currentStudent;
  }

  async getStudentById(studentId: string): Promise<IStudent> {
    const student = await this.studentModel.findById(studentId).exec();
    if(!student){
      throw new NotFoundException(`Student ${studentId} not found`);
  }
    return student;
  }
  async getAllStudent(): Promise<IStudent[]> {
    const students = await this.studentModel.find();
    if(!students || students.length == 0){
      throw new NotFoundException(`Students not found`);
    }
    return students;
  }

  async deleteStudentById(studentId: string): Promise<IStudent> {
    const student = await this.studentModel.findByIdAndDelete(studentId);
    if(!student){
      throw new NotFoundException(`Student ${studentId} not found`);
  }
    return student;  
}

}