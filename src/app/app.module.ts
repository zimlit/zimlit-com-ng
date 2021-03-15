import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CodingComponent } from './coding/coding.component';
import { HomeComponent } from './home/home.component';
import { ConlangingComponent } from './conlanging/conlanging.component';
import { CubingComponent } from './cubing/cubing.component';
import { WorldbuildingComponent } from './worldbuilding/worldbuilding.component';
import { ZzTutorialComponent } from './zz-tutorial/zz-tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CodingComponent,
    HomeComponent,
    ConlangingComponent,
    CubingComponent,
    WorldbuildingComponent,
    ZzTutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
