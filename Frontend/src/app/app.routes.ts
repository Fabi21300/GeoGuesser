// managed alles
// heist eigentlich app-routing.module.ts

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SelectGamemodeComponent } from './select-gamemode/select-gamemode.component';

export const routes: Routes = [

    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'select-gamemode', component: SelectGamemodeComponent
    },
];
