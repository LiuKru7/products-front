import {Injectable} from '@angular/core';
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private jacketApiUrl = 'http://localhost:8080/api/product/jacket';
  private hatsApiUrl = 'http://localhost:8080/api/product/hats';

  constructor(private http: HttpClient) {
  }

  private shoes: Product[] = [
    {
      id: 1,
      name: "Running shoes",
      price: 19.99,
      category: "shoes",
      description: "Very comfortable shoes",
      inStock: true
    },
    {
      id: 2,
      name: "Hiking shoes",
      price: 19.99,
      category: "shoes",
      description: "Waterproof nice hiking shoes",
      inStock: true
    }
  ]

  getShoes(): Product[] {
    return this.shoes
  }

  public getJackets(): Observable<Product[]> {
    return this.http.get<Product[]>(this.jacketApiUrl)
  };

  public getHats (): Observable<Product[]> {
    return this.http.get<Product[]>(this.hatsApiUrl)
  }
  public deleteAllHats(): Observable<void> {
    return this.http.delete<void>(this.hatsApiUrl)
  }
}
