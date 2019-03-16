import { Injectable } from '@nestjs/common';

export const DogState = {
  GOOD_BOY: 0,
  BAD_BOY: 1,
};

@Injectable()
export class DogService {
  dogs = [
    { name: 'Felix', state: DogState.GOOD_BOY },
    { name: 'Fido', state: DogState.GOOD_BOY },
    { name: 'Jazz', state: DogState.GOOD_BOY },
    { name: 'Sweetheart', state: DogState.GOOD_BOY },
    { name: 'Buttercup II', state: DogState.GOOD_BOY },
  ];

  async getDogs() {
    return this.dogs;
  }
}
