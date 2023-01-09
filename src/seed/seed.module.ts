import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';

/* eslint-disable prettier/prettier */

@Module({
  controllers: [SeedController],
  providers: [SeedService]
})
export class SeedModule {}
