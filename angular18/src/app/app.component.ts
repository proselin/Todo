import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  template: `
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  `,
  imports: [RouterOutlet],
  standalone: true,
  styles: ""
})
export class AppComponent {
  title = 'angular18';
}
