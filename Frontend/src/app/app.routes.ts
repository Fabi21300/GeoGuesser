// managed alles
// heist eigentlich app-routing.module.ts

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SelectGamemodeComponent } from './select-gamemode/select-gamemode.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'select-gamemode', component: SelectGamemodeComponent },
    { path: 'profile', component: ProfileComponent},
    { path: 'settings', component: SettingsComponent},
];
