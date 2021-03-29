import { WebPlugin } from '@capacitor/core';
import { HmsAvailabilityPlugin } from './definitions';

export class HmsAvailabilityWeb extends WebPlugin implements HmsAvailabilityPlugin {
  constructor() {
    super({
      name: 'HmsAvailability',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const HmsAvailability = new HmsAvailabilityWeb();

export { HmsAvailability };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(HmsAvailability);
