import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent  {
  exercise: string = 'Angular2';
  appList: string[]= ['Component', 'Services', 'Binding', 'Display'];
}
