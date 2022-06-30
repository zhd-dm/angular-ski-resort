import { Component } from '@angular/core';

import { skiPasses } from 'src/data';
import { ISkiPass } from 'src/types';

@Component({
  selector: 'app-ski-pass',
  templateUrl: './ski-pass.component.html',
  styleUrls: ['./ski-pass.component.scss']
})
export class SkiPassComponent {

  headerTitle = 'Ски-пассы';

  showAllText = 'Все';

  skiPasses: ISkiPass[] = skiPasses;


  constructor() { }

}
