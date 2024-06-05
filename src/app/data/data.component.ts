import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit {
  showOptions = false;
  constructor(private service: DataService) {}
  ngOnInit(): void {

  }

  
  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  handleOptionClick(option: number) {
    // Handle option click
    console.log('Option ' + option + ' clicked');
    // Add your logic here
  }

}
