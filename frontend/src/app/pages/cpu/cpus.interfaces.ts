export interface Cpu {
  _id?: string;
  name: string;
  brand: string;
  cores: number;
  threads: number;
  clockSpeed: number;
  description?: string;
}