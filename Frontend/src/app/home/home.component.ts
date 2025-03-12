// hier kommen die ganzen methoden/funktionen logik... rein

import { Component } from '@angular/core';
import { SelectGamemodeComponent } from "../select-gamemode/select-gamemode.component";
import { HeaderComponent } from '../header/header.component';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-home',
  imports: [SelectGamemodeComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
