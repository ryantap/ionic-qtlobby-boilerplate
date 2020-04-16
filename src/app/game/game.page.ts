import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lobby',
  templateUrl: 'game.page.html',
  styleUrls: ['game.page.scss'],
})
export class GamePage implements OnInit {
  gameUrl: string = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params && params.get('data?')) {
        let data = JSON.parse(atob(decodeURIComponent(params.get('data?'))));
        this.gameUrl = data.url;
      }
    });
  }

  onGameClick() {
    this.router.navigateByUrl('lobby')
  }
}
