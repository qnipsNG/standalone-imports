import { Component } from '@angular/core';

// Works
// import { SHARED_DIRECTIVES } from '../shared/shared-directives';
// Doesnt work
import { SHARED_DIRECTIVES } from 'src/app/shared/shared-directives';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [SHARED_DIRECTIVES],
})
export class AppComponent {}
