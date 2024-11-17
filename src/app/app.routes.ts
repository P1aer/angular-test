import { Routes } from '@angular/router';
import {MainPageComponent} from "../assets/components/main-page/main-page.component";
import {AudioPageComponent} from "../assets/components/audio-page/audio-page.component";

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'track/:id', component: AudioPageComponent },
  { path: '**', component: MainPageComponent }
];
