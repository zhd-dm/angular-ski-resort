import { NgModule } from '@angular/core';

import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DomSanitizer } from '@angular/platform-browser';

import { ICONS } from 'src/data';
import { ISvg } from 'src/types';

const MaterialComponents = [
  MatIconModule,
  MatButtonModule
]

@NgModule({
  declarations: [],
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ]
})
export class MaterialModule {

  constructor(
    public matIconRegistry: MatIconRegistry,
    public domSanitizer: DomSanitizer
  ) {
    this.registerCustomIcons(ICONS);
  }

  registerCustomIcons(icons: ISvg[]): void {
    icons.forEach((icon: ISvg) => {
      this.matIconRegistry.addSvgIcon(
        icon.name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path)
      );
    })
  }

}
