import { HttpClient } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: {
    '(click)': 'load()'
  }
})
export class AppComponent { // To implement - Forms, IO
  title = 'ng-revise';

  constructor(private http: HttpClient, private appService: AppService) {
    this.getHtml();
    this.appService.incrVersion();
  }

  // @HostListener('click')
  load() {
    console.log('click ..')
  }

  getHtml() {
    this.http.get('/', { responseType: 'text'})
      .subscribe((res) => {
        console.log(res)
      })
  }
}
