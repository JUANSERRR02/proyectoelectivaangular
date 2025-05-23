export interface Psu {
  _id?: string;
  name: string;
  wattage: number;
  efficiencyRating?: string;
  modular?: boolean;
}