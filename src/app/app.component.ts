import { Component } from '@angular/core';
import { MdlUpgraderDirective } from './mdl-upgrader.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [MdlUpgraderDirective]
})
export class AppComponent {
  title = 'app works!';
}
