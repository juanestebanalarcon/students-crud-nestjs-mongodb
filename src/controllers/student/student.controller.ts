import {
  Controller,
  Body,
  Param,
  Post,
  Res,
  HttpStatus,
  Put,
  Get,
  Delete,
} from '@nestjs/common';
import { StudentService } from 'src/services/student/student.service';
import { CreateStudentDto } from '../../Dtos/create-student.dto';
import { UpdateStudentDto } from '../../Dtos/update-student.dto';

/* eslint-disable prettier/prettier */
@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}
    
    @Post('/new-student')
    async createStudent(@Res() response, @Body() createStudentDTO: CreateStudentDto) {

        try{
            const newStudent = await this.studentService.createStudent(createStudentDTO);
            return response.status(HttpStatus.CREATED).json({msg: 'Student has been created successfully', OK: true,Student:newStudent});
        }
        catch(e){
            return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({OK: false,msg:`Internal Server Error occurred while creating student`, error: e});
        }

    }
    @Put('/:id')
    async updateStudent(@Param('id') studentId: string, @Res() response, @Body() updateStudentDTO: UpdateStudentDto){
        try{
            const updatedStudent = await this.studentService.updateStudent(studentId, updateStudentDTO);
            return response.status(HttpStatus.OK).json({OK: true,updatedStudent: updatedStudent});
        }catch(error){
            return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({OK: false,msg:`Internal Server Error occurred while updating student`,error: error});
        }
    }
    @Get('allStudents')
    async getAllStudents(@Res() response){
        try{
            const students = await this.studentService.getAllStudent();
            return response.status(HttpStatus.OK).json({OK: true,students: students});
        }
        catch(e){
            return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({OK: false,msg:`Internal Server Error occurred while fetching students`,error: e});
        }
    }
    @Get('/:id')
    async getStudentById(@Param('id') studentId: string, @Res() response){
        try{
            const student = await this.studentService.getStudentById(studentId);
            if(!student){
                return response.status(HttpStatus.NOT_FOUND).json({OK: false,msg:'Student not found'});
            }
            return response.status(HttpStatus.OK).json({OK: true,student: student});
        }
        catch(e){
            return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({OK: false,msg:`Error ocurred when getting student`, error: e});
        }
    }
    @Delete('/:id')
    async deleteStudentById(@Param('id') studentId: string, @Res() response){
        try{
            const deletedStudent = await this.studentService.deleteStudentById(studentId);
            if(!deletedStudent){
                return response.status(HttpStatus.NOT_FOUND).json({OK: false,msg:'Student not found'});
            }
            return response.status(HttpStatus.OK).json({OK: true,msg:'Student has been deleted'});
        }
        catch(e){
            return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({OK: false,msg:`Error deleting student ${studentId}`, error: e});
        }
    }
}
