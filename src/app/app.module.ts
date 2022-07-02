import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './models/material/material/material.module';

import { SkiPassComponent } from './models/components/ski-pass/ski-pass.component';
import { ContainerHeaderComponent } from './models/components/container-header/container-header.component';
import { ContainerFooterComponent } from './models/components/container-footer/container-footer.component';
import { ButtonCreateNewComponent } from './models/UI/button-create-new/button-create-new.component';
import { ButtonDefaultComponent } from './models/UI/button-default/button-default.component';

@NgModule({
  declarations: [
    AppComponent,
    SkiPassComponent,
    ContainerHeaderComponent,
    ContainerFooterComponent,
    ButtonCreateNewComponent,
    ButtonDefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
