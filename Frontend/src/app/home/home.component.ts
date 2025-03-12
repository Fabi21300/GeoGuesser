// hier kommen die ganzen methoden/funktionen logik... rein

import { Component } from '@angular/core';
import { SelectGamemodeComponent } from "../select-gamemode/select-gamemode.component";

@Component({
  selector: 'app-home',
  imports: [SelectGamemodeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
