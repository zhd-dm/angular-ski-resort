import { IButtonType, ISkiPass, ISvg } from "./types";

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

export const skiPasses: ISkiPass[] = [
  {
    id: 5678376727641906,
    type: 'Дневной',
    imagePath: '../../../../assets/images/ski-passes/ski-pass_day.svg',
    time: '8:30-16:00',
    price: 3150
  },
  {
    id: 5678376727641906,
    type: 'Полуденный',
    imagePath: '../../../../assets/images/ski-passes/ski-pass_midday.svg',
    time: '12:30-16:00',
    price: 2150
  },
  {
    id: 5678376727641906,
    type: 'Вечерний',
    imagePath: '../../../../assets/images/ski-passes/ski-pass_evening.svg',
    time: '16:00-22:00',
    price: 1150
  },
  {
    id: 5678376727641906,
    type: 'Детский',
    imagePath: '../../../../assets/images/ski-passes/ski-pass_default.svg',
    time: '8:30-16:00',
    price: 800
  },
  {
    id: 5678376727641906,
    type: 'Новичок',
    imagePath: '../../../../assets/images/ski-passes/ski-pass_default.svg',
    time: '8:30-16:00',
    price: 1200
  }
];
