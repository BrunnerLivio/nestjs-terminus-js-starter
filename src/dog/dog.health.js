import { Injectable, Dependencies } from '@nestjs/common';
import { DogService, DogState} from './dog.service';
import { HealthCheckError } from '@godaddy/terminus';

@Injectable()
@Dependencies(DogService)
export class DogHealthIndicator {
  constructor(dogService) {
    this.dogService = dogService;
  }

  getStatus(
    key, isHealthy, data) {
    return {
      [key]: {
        status: isHealthy ? 'up' : 'down',
        ...data,
      },
    };
  }

  async isHealthy(key) {
    const dogs = await this.dogService.getDogs();
    const badboys = dogs.filter(dog => dog.state === DogState.BAD_BOY);
    const isHealthy = badboys.length === 0;

    const result = this.getStatus(key, isHealthy, { badboys: badboys.length });

    if (isHealthy) {
      return result;
    }
    throw new HealthCheckError('Dogcheck failed', result);
  }
}
