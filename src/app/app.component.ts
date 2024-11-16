import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyLibrary9789374509Component } from '../../projects/my-library-9789374509/src/lib/my-library-9789374509.component';
import { MyButtonComponent } from '../../projects/my-library-9789374509/src/public-api';
// import { MyLibComponent } from 'my-lib';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'workspace';
}
