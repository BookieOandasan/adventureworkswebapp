import { Observable } from "rxjs";
import { OptionsHeaders } from "./options-headers";
import { HttpClient } from "@angular/common/http";
import { EnvironmentConfigService } from "./environment-config-service.service";
import { ServiceLocator } from "./ServiceLocator";

export class ServiceBase {

  public httpOptions = new OptionsHeaders().getHeaders();
  public baseUrl: string;
  serviceBaseUrl: any;
  constructor(protected _httpClient: HttpClient) {
    let environmentConfigService = <EnvironmentConfigService>ServiceLocator.injector.get(EnvironmentConfigService);

    //this.baseUrl = environmentConfigService.serviceBaseUrl;
    this.serviceBaseUrl = environmentConfigService.serviceBaseUrl;

  }
  public doGetAPI(endPoint: string): Observable<any> {
    return this._httpClient.get<any>(this.serviceBaseUrl + endPoint);
  }
}
