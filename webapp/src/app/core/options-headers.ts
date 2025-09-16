import { HttpHeaders } from '@angular/common/http';

export class OptionsHeaders {
    public getHeaders(): HttpHeaders {
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.set('Content-Type', 'application/json');
        httpHeaders = httpHeaders.set('Cache-Control', 'Cache-Control');
        httpHeaders = httpHeaders.set('Pragma', 'no-cache');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token, content-type');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Credentials', 'true');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');

        return httpHeaders;
    }
}
