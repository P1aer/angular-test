import {Component, HostBinding, model} from '@angular/core';
import {BSwitchComponent} from "../b-switch/b-switch.component";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-audio-nav',
  standalone: true,
  imports: [
    BSwitchComponent,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './audio-nav.component.html',
  styleUrl: './audio-nav.component.css'
})
export class AudioNavComponent {
  themeChecker = false;
  switcherMain = '#121212';
  switcherSec = '#242424';

  changeTheme(bool: boolean) {
    this.themeChecker = bool;
    if (bool) {
      this.switcherMain = '#d5d2d2';
      this.switcherSec = '#383636';
      document.documentElement.style.setProperty('--app-main-color', '#121212')
      document.documentElement.style.setProperty('--app-secondary-color', '#181818')
      document.documentElement.style.setProperty('--app-text-color', '#6B7777')
      document.documentElement.style.setProperty('--app-anti-color', '#fff')

    }
    else  {
      this.switcherMain = '#121212';
      this.switcherSec = '#948484';
      document.documentElement.style.setProperty('--app-main-color', '#fff')
      document.documentElement.style.setProperty('--app-secondary-color', '#d5d2d2')
      document.documentElement.style.setProperty('--app-text-color', '#1a1a1a')
      document.documentElement.style.setProperty('--app-anti-color', '#000')
    }
  }
}
