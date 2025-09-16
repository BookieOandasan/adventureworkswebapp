import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceBase } from 'src/app/core/service-base.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends ServiceBase {

  constructor(_httpClient: HttpClient) {
    super(_httpClient);
  }
  public GetDepartments(): Observable<any> {
    return this.doGetAPI('Department');
  }
}
