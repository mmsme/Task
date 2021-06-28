import { Component, Input, OnInit } from '@angular/core';
import { Maid } from 'src/app/Models/Maid';

@Component({
  selector: 'app-MaidDetails',
  templateUrl: './MaidDetails.component.html',
  styleUrls: ['./MaidDetails.component.css'],
})
export class MaidDetailsComponent implements OnInit {
  @Input('data') data!: Maid;

  constructor() {}

  ngOnInit() {}
}
