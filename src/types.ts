export interface ISvg {
  path: string;
  name: string;
}

export interface IButtonType {
  title: string;
  isPeople: boolean;
}

export interface ISkiPass {
  id: number;
  type: string;
  imagePath: string;
  time: string;
  price: number;
  visitor?: string;
}
