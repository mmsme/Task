import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

import { Maid } from 'src/app/Models/Maid';
import { MaidServicesService } from 'src/app/Services/maidServices.service';

@Component({
  selector: 'app-ChooseMaid',
  templateUrl: './ChooseMaid.component.html',
  styleUrls: ['./ChooseMaid.component.css'],
})
export class ChooseMaidComponent implements OnInit {
  list: Maid[] = [];
  nations: string[] = [];
  minValue!: number;
  maxValue!: number;
  selectedMaid!: any;
  options: Options = {};

  constructor(private maidServices: MaidServicesService) {}

  ngOnInit() {
    this.list = this.maidServices.getAllMaid();
    this.getAllNations();
    this.getMaxAge();
    this.getMinAge();
  }

  getAllNations() {
    this.list.forEach((e) => {
      this.nations.push(e.nat);
    });

    this.nations = [...new Set(this.nations)];
  }

  getMaxAge() {
    let max = 0;
    this.list.forEach((e) => {
      if (e.age > max) {
        max = e.age;
      }
    });

    this.options.ceil = max;
    this.maxValue = max;
  }

  getMinAge() {
    let min = this.list[0].age;
    this.list.forEach((e) => {
      if (e.age < min) {
        min = e.age;
      }
    });

    this.minValue = min;
    this.options.floor = min;
  }

  onMaidSelected(id: any, btn: HTMLButtonElement) {
    this.selectedMaid = this.list.find((m) => {
      return m.id == id;
    });

    btn.click();
  }
}
