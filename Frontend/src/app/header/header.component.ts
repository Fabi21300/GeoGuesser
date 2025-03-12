import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

constructor(private router: Router){}

  navigate(path: string) {
    console.log(path);
    this.router.navigate([path]);
  }
}
