import { Component, OnInit } from '@angular/core';
import { Stepper_Menu } from './stepper_menu';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent implements OnInit {
  steps = Stepper_Menu;
  currentStep = 2;

  constructor() {}

  ngOnInit() {}

  next() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  prev() {
    if (this.currentStep >= 0) {
      this.currentStep--;
    }
  }
}
