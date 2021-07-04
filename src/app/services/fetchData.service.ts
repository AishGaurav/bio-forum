import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Injectable({providedIn : 'root'})

export class DataFetchService {
    API_PATH : string = '../assets/data/';

    constructor(
        private httpClient : HttpClient 
    ){}

    getAllproducts():Observable<any>{
        let url = this.API_PATH + 'domain.json';
        //console.log('getAllproducts URL = ', url);
        return this.httpClient.get(url);
    }

}