import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITemperatureUnits } from './temperature-units.model';

@Component({
  selector: 'app-temperature-label',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temperature-label.component.html',
  styleUrls: ['./temperature-label.component.scss']
})
export class TemperatureLabelComponent {

  @Input() temperature = 0;
  @Input() unit: ITemperatureUnits = 'C';

}
