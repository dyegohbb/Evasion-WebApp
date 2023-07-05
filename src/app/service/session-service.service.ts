import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {
  private sessionData: { [key: string]: string } = {};

  set(key: string, value: string) {
    this.sessionData[key] = value;
  }

  get(key: string): string {
    return this.sessionData[key];
  }

  clear() {
    this.sessionData = {};
  }
}
