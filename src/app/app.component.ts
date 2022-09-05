import {Component, OnInit} from '@angular/core';
import {ThingspeakService} from './thingspeak.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'iot-cars';
  vibrationSensorReadings: any = [];
  hallEffectSensorReadings: any = [];
  feedSize = 5;
  radio = 0;
  formData;
  radioInput;

  constructor(private thingspeak: ThingspeakService) {
    this.formData = new FormGroup({
      radioInput: new FormControl()
    });

  }

  ngOnInit() {
    this.thingspeak.getVibrationReadings(this.feedSize).subscribe(data => {
      console.log('getVibrationSensor: ', data);
      this.vibrationSensorReadings = data.feeds;
    });

    this.thingspeak.getHallReadings(this.feedSize).subscribe(data => {
      console.log('getHallSensor: ', data);
      this.hallEffectSensorReadings = data.feeds;
    });

  }

  onClickSubmit(data) {
    console.log('onClickSubmit: data', data.radioInput);
    this.radio = data.radioInput;
    console.log('onClickSubmit: hallEffectSensorReadings ', this.hallEffectSensorReadings);
  }

}

