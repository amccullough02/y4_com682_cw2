import { Component } from '@angular/core';
import * as WebChat from 'botframework-webchat';

@Component({
  selector: 'home-page',
  standalone: true,
  templateUrl: './home.component.html',
})
export class HomeComponent {
  ngOnInit() {
    const directLineSecret = 'Uubzxr3QsmU.hU4OoiCw60fYTZRjeeFO8rkue8p37TCtv2XraCQCKg8';
    const directLine = WebChat.createDirectLine({
      secret: directLineSecret,
    });

    WebChat.renderWebChat(
      {
        directLine,
        userID: 'stellarsight-user',
        username: 'Stellarsight Visitor',
        locale: 'en-us',
      },
      document.getElementById('webchat')
    );
  }
}
