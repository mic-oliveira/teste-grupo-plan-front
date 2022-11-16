export class HomeAppliance {
  id: any | undefined;
  name: string | undefined;
  description: string | undefined;
  voltage: number | undefined;
  manufacturer_id: number | undefined;
  manufacturer: string | undefined;


  constructor() {
    this.voltage = 110;
    this.manufacturer_id = 1;
  }
}
