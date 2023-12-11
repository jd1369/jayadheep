import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit {
  data: any;
  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.loadData();
    console.log('jefaas');
    console.log(this.data);
  }

  loadData() {
    this.service.getData().subscribe((Response) => {
      console.log(Response);
      this.data = Response;
    });
  }

  updateData(item: any) {
    this.service.updateData(item).subscribe(() => {
      this.loadData();
    });
  }

  addData() {
    const newItem = { id: this.data.length + 1 };
    this.service.addData(newItem).subscribe(() => {
      this.loadData();
    });
  }

  deleteData(id: any) {
    this.service.deleteData(id.id).subscribe(() => {
      this.loadData();
    });
  }
}
