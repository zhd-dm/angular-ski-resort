import { Component } from '@angular/core';

import { skiPasses } from 'src/data';
import { ISkiPass } from 'src/types';

@Component({
  selector: 'app-ski-pass',
  templateUrl: './ski-pass.component.html',
  styleUrls: ['./ski-pass.component.scss']
})
export class SkiPassComponent {

  skiPasses: ISkiPass[] = skiPasses.slice(0, 3);

  constructor() { }

}
