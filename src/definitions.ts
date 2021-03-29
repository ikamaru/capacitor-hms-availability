declare module '@capacitor/core' {
  interface PluginRegistry {
    HmsAvailability: HmsAvailabilityPlugin;
  }
}

export interface HmsAvailabilityPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
