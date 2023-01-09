import { Injectable } from '@nestjs/common';

/* eslint-disable prettier/prettier */

@Injectable()
export class SeedService {
  
  // constructor(@InjectModel('Student') private studentModel: Model<IStudent>) {}

  async executeSEED() {
    // const data = new executeData();
    // const bulkInsert = await this.studentModel.create(data.getData());
    // return bulkInsert;
    return "hola";
  }
}
