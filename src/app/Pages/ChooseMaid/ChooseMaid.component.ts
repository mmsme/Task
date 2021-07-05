import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

import { Maid } from 'src/app/Models/Maid';
import { MaidServicesService } from 'src/app/Services/maidServices.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ChooseMaid',
  templateUrl: './ChooseMaid.component.html',
  styleUrls: ['./ChooseMaid.component.css'],
})
export class ChooseMaidComponent implements OnInit {
  list: Maid[] = [];
  filteredList: Maid[] = [];
  nations: string[] = [];
  minValue!: number;
  maxValue!: number;
  selectedMaid: any = null;
  options: Options = {};
  filterOptions: any = {nat: null, maxAge: null, minAge: null}
  p: any;

  constructor(private maidServices: MaidServicesService) {
  }

  ngOnInit() {
    this.filteredList = this.list = this.maidServices.getAllMaid();
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

  onNatSelected(event: any){
    this.filterOptions.nat = event.value
  }

  onSliderValueChanged(event: any){
    this.filterOptions.minAge = event.value;
    this.filterOptions.maxAge = event.highValue;
  }

  filter(){
    let res:any[] = [];
    
    if (this.filterOptions.nat && this.filterOptions.maxAge && this.filterOptions.minAge) {
      res = this.filterByAllOptions();
    }else if (this.filterOptions.nat) {
      res = this.filterByNat();
    }else if(this.filterOptions.maxAge){
      res = this.filterByAge();
    }

    console.log(res);
    this.filteredList = [...new Set(res)]
  }

  filterByAge(){
    return this.list.filter((e)=>{
      return e.age >= this.filterOptions.minAge && e.age <= this.filterOptions.maxAge;
    })
  }

  filterByNat(){
    return this.list.filter((e)=>{
      return e.nat == this.filterOptions.nat;
    })
  }

  filterByAllOptions(){
    return this.list.filter((e)=> {
      return e.nat == this.filterOptions.nat && ( e.age <= this.filterOptions.maxAge && e.age >= this.filterOptions.minAge) 
    });
  }

  clearFilter(){
    this.filterOptions = {nat: null, maxAge: null, minAge: null};
    this.filteredList = [...this.list];
    this.maxValue = this.options.ceil || 0;
    this.minValue = this.options.floor || 0;
  }
}
