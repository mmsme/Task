import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-card',
  templateUrl: './step-card.component.html',
  styleUrls: ['./step-card.component.css'],
})
export class StepCardComponent implements OnInit {
  @Input('status') _state: string = 'next';
  @Input('title') title!: string;
  @Input('content') content!: string;
  @Input('icon') icon!: string;

  constructor() {}

  ngOnInit() {}
}
