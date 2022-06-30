import { Component } from '@angular/core';
import { textButtons } from 'src/data';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  value = textButtons.filter(item => item.isPeople === false)[0].title;

  constructor() { }

}
