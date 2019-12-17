import { Component, OnInit } from '@angular/core';
import { ThingspeakService } from './thingspeak.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'thingspeak';

  feeds: any = [];

  constructor(private thingspeak: ThingspeakService) {

  }

  ngOnInit() {
    
    this.thingspeak.getFeed().subscribe( data => {
      console.log(data);
      
      this.feeds = data.feeds;
    });

  
  }
  


}

