import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

export class CoreServices{
    constructor(private httpClient : HttpClient){

    }
            get(url, options): Observable<any>{
                return this.httpClient.get(url, options);
            }
        
            post(url, body, options): Observable<any>{
                return this.httpClient.post(url, body, options)
            }
        
            put(url, body,options): Observable<any>{
                return this.httpClient.put(url, body,options);
            }
        
            delete(url, options): Observable<any>{
                return this.httpClient.delete(url, options)
            }
        
}