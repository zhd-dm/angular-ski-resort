import { Component } from '@angular/core';
import { textButtons } from 'src/data';

@Component({
  selector: 'app-button-create-new',
  templateUrl: './button-create-new.component.html',
  styleUrls: ['./button-create-new.component.scss']
})
export class ButtonCreateNewComponent {

  value = textButtons.filter(item => item.isPeople === false)[0].title;

  constructor() { }

}
