import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Evasion-WebApp';
  evasionLogoUrl: SafeUrl;
  ifpeLogoUrl: SafeUrl;


  constructor(private sanitizer: DomSanitizer) {
    this.evasionLogoUrl = this.sanitizer.bypassSecurityTrustUrl('assets/logo.png');
    this.ifpeLogoUrl = this.sanitizer.bypassSecurityTrustUrl('assets/ifpe.png');
  }
}
