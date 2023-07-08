import { Component } from '@angular/core';

import { SessionService } from '../../service/session.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    this.sessionService.checkLogin(this.sessionService.get('access_token')).subscribe();
  }
}
