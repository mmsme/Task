import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Maid } from 'src/app/Models/Maid';

@Component({
  selector: 'app-MaidCard',
  templateUrl: './MaidCard.component.html',
  styleUrls: ['./MaidCard.component.css'],
})
export class MaidCardComponent implements OnInit {
  @Input('data') data!: Maid;
  @Input('revers') reversed: boolean = false;
  @Input('selected') selected: boolean = false;
  @Output('clicked') clicked = new EventEmitter<any>();
  formatedData!: any[];

  constructor() {}

  ngOnInit() {
    this.formatedData = [
      'المهنه : ' + this.data.job,
      'الجنسيه : ' + this.data.nat,
      'الديانه : ' + this.data.rel,
      this.data.skills[0],
      this.data.skills[1],
    ];
  }

  onClick() {
    this.clicked.emit(this.data.id);
  }
}
