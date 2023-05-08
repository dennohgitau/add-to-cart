import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Billing } from "../models/billing.model";

const baseUrl = 'http://localhost:8000/api/billing';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http : HttpClient) { }

  getAll(): Observable<Billing[]>{
    return this.http.get<Billing[]>(baseUrl)
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}
