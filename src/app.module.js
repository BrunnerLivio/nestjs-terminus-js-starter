import { Module } from '@nestjs/common';
import { DogModule } from './dog/dog.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [DogModule, HealthModule],
})
export class AppModule {}
