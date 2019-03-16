import { DogHealthIndicator } from '../dog/dog.health';
import { Injectable, Dependencies } from '@nestjs/common';

@Injectable()
@Dependencies(DogHealthIndicator)
export class TerminusOptionsService {
  constructor(dogHealthIndicator) {
    this.dogHealthIndicator = dogHealthIndicator;
  }

  createTerminusOptions() {
    const healthEndpoint = {
      url: '/health',
      healthIndicators: [async () => this.dogHealthIndicator.isHealthy('dog')],
    };
    return {
      endpoints: [healthEndpoint],
    };
  }
}
