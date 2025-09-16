import { Component, OnInit } from '@angular/core';
import { DepartmentService } from './department-service.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  public departments: any[] = [];

  constructor(private _departmentService: DepartmentService) { }

  ngOnInit() {
    this._departmentService.GetDepartments().subscribe(
      results =>
        this.departments = results)
  }

}
