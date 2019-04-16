import { Component,OnInit } from '@angular/core';
import {GMapModule} from 'primeng/gmap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular7-app';
  value: Date;
  options: any;
	events: any[];

    ngOnInit() {
        this.events = [
            {
                "title": "All Day Event",
                "start": "2019-03-01"
            },
            {
                "title": "Long Event",
                "start": "2016-03-07",
                "end": "2019-03-10"
            },
            {
                "title": "Repeating Event",
                "start": "2019-03-09T16:00:00"
            },
            {
                "title": "Repeating Event",
                "start": "2019-03-16T16:00:00"
            },
            {
                "title": "Conference",
                "start": "2019-03-11",
                "end": "2019-03-13"
            }
        ];
		
    }
  

}

