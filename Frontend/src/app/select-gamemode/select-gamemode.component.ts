import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-gamemode',
  imports: [],
  templateUrl: './select-gamemode.component.html',
  styleUrl: './select-gamemode.component.css'
})
export class SelectGamemodeComponent {
  
  constructor
  (private router: Router) { }

  selectGamemode(gamemode: string) {
    console.log(gamemode);
  }

  navigateToHome() {
    console.log('navigate to home');
    this.router.navigate(['/home']);
  }
}

