import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsController } from './modules/cars/controllers/cars.controller';
import { BrandsModule } from './modules/brands/brands.module';
import { BranchModule } from './modules/branch/branch.module';
import { CarsService } from './modules/cars/services/cars.service';
import { CarsController } from './modules/cars/controllers/cars.controller';

@Module({
  imports: [BranchModule, BrandsModule],
  controllers: [AppController, CarsController],
  providers: [AppService, CarsService],
})
export class AppModule {}
