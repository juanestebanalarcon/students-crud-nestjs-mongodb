import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './Schemas/Student.schema';
import { StudentService } from './services/student/student.service';
import { StudentController } from './controllers/student/student.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`${process.env.DB_BASE_URL}`, {
      dbName: 'studentsdb',
    }),
    MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }]),
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class AppModule {}
