import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public version = 1.0;
  constructor() { }

  incrVersion() {
    this.version += 1.0;
  }
}
