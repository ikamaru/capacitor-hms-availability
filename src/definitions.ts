declare module '@capacitor/core' {
  interface PluginRegistry {
    HmsAvailability: HmsAvailabilityPlugin;
  }
}

export interface HmsAvailabilityPlugin {
  isHmsAvailable():Promise<{isAvailable:boolean}>;
  isGmsAvailable():Promise<{isAvailable:boolean}>;
}
