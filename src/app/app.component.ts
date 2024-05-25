import { HttpClient } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: {
    '(click)': 'load()'
  }
})
export class AppComponent { // To implement - Forms, Service
  title = 'ng-revise';

  constructor(private http: HttpClient) {
    this.getHtml();
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
