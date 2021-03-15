import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CodingComponent } from './coding/coding.component';
import { HomeComponent } from './home/home.component';
import { ConlangingComponent } from './conlanging/conlanging.component';
import { CubingComponent } from './cubing/cubing.component';
import { WorldbuildingComponent } from './worldbuilding/worldbuilding.component';
import { ZzTutorialComponent } from './zz-tutorial/zz-tutorial.component';
import { ZzTutorialBeginnerComponent } from './zz-tutorial-beginner/zz-tutorial-beginner.component';

const routes: Routes = [
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'coding', component: CodingComponent },
  { path: 'conlanging', component: ConlangingComponent },
  { path: 'cubing', component: CubingComponent },
  { path: 'worldbuilding', component: WorldbuildingComponent },
  { path: 'cubing/tutorials/zz', component: ZzTutorialComponent },
  { path: 'cubing/tutorials/zz/beginner', component: ZzTutorialBeginnerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
