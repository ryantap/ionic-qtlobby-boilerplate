import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lobby',
  templateUrl: 'lobby.page.html',
  styleUrls: ['lobby.page.scss'],
})
export class LobbyPage {

  injectedLobbyUrl: string = '';

  constructor(
    private router: Router
  ) {}

  /**
   * NOTE: Ignore this, this will be automatically injected, this is only used for testing purposes
   */
  onInjectHandler(url) {
    this.injectedLobbyUrl = `${url}?appId=io.ionic.starter`;
  }
}
