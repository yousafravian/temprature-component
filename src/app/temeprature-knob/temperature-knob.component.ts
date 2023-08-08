import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TemperatureLabelComponent} from "./temperature-label/temperature-label.component";

@Component({
  selector: 'app-temperature-knob',
  standalone: true,
  imports: [CommonModule, TemperatureLabelComponent],
  templateUrl: './temperature-knob.component.html',
  styleUrls: ['./temperature-knob.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemperatureKnobComponent {

  @Input() minTemperature: number = 0; // Default is 0
  @Input() maxTemperature: number = 100; // Default to 100
  @Input() set targetTemperature(temp: number) {
    // Lock values in bw ranges
    this.targetTemp = Math.min(Math.max(this.minTemperature, temp), this.maxTemperature);
    this.knobStyle = this.normalizeKnobPosition(); // initial value is min temp
  }

  targetTemp: number = this.minTemperature; // initial value is min temp
  knobStyle: number = this.normalizeKnobPosition(); // initial value is min temp

  private normalizeKnobPosition() {
    const absTempDiff = this.maxTemperature - this.minTemperature;
    const normalizedTargetTemperature = this.targetTemp - this.minTemperature;
    const percentage = normalizedTargetTemperature * 100 / absTempDiff;
    const rotation = 280 * percentage / 100;
    return rotation + 40;
  }
}
