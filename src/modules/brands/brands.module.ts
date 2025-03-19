import { Module } from '@nestjs/common';
import { BrandsService } from './brands/brands.service';
import { BrandsService } from './services/brands.service';
import { BrandsController } from './controllers/brands.controller';

@Module({
  providers: [BrandsService],
  controllers: [BrandsController]
})
export class BrandsModule {}
