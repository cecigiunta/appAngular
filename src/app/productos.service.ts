import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from "rxjs/operators"
import { lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(buscar:string) {
    return this.http.get("https://api.mercadolibre.com/sites/MLA/search?q="+ buscar) 
  }

  getAllAsync () {
   return this.http.get("https://api.mercadolibre.com/sites/MLA/search?q=motog").pipe(map((value:any)=>{return value ["results"]}))
  }

  getAllPromise () {
    return lastValueFrom(this.http.get("https://api.mercadolibre.com/sites/MLA/search?q=motog"))
  }

  getById(id:string) {
    return this.http.get("https://api.mercadolibre.com/items/"+ id)
  }
}
  
