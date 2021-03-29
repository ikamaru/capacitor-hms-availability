import { WebPlugin } from '@capacitor/core';
import { HmsAvailabilityPlugin } from './definitions';

export class HmsAvailabilityWeb extends WebPlugin implements HmsAvailabilityPlugin {
  constructor() {
    super({
      name: 'HmsAvailability',
      platforms: ['web'],
    });
  }
  async isHmsAvailable(): Promise<{ isAvailable: boolean; }> {
    throw new Error('Not supported int the web.');
  }
  async isGmsAvailable(): Promise<{ isAvailable: boolean; }> {
    throw new Error('Not supported int the web.');
  }
 
}

const HmsAvailability = new HmsAvailabilityWeb();

export { HmsAvailability };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(HmsAvailability);
