import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'zimilt-com-ng';
  headerItems = ['home', 'coding', 'cubing', 'conlanging', 'worldbuilding'];
}