import { IButtonType, ISvg } from "./types";

export const ICONS: ISvg[] = [
  {
    path: '../assets/icons/dots.svg',
    name: 'dots'
  },
  {
    path: '../assets/icons/plus.svg',
    name: 'plus'
  },
  {
    path: '../assets/icons/right-arrow.svg',
    name: 'right-arrow'
  },
  {
    path: '../assets/icons/up-arrow.svg',
    name: 'up-arrow'
  },
];

export const textButtons: IButtonType[] = [
  {
    title: 'Добавить нового',
    isPeople: true
  },
  {
    title: 'Добавить новый',
    isPeople: false
  }
];
