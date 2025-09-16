import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './HumanResources/department/department.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ServiceLocator } from './core/ServiceLocator';
import { EnvironmentConfigService } from './core/environment-config-service.service';
import { WinAuthInterceptor } from './http-interceptors/WinAuthInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: WinAuthInterceptor, multi: true },
    EnvironmentConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    ServiceLocator.injector = injector;
  }
}
