import { Component } from '@angular/core';

import { SessionService } from '../../service/session.service';

@Component({
  selector: 'app-about-screen',
  templateUrl: './about-screen.component.html',
  styleUrls: ['./about-screen.component.css']
})
export class AboutScreenComponent {

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    this.sessionService.checkLogin(this.sessionService.get('access_token')).subscribe();
  }
}
