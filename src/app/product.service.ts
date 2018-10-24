import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, Subject} from 'rxjs';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  subject = new Subject<Product[]>();
  private productUrl = 'http://localhost:3000/product';

  constructor(
    private http: HttpClient,
  ) {
    this.subject = new Subject;
  }

  addProduct(product: Product): Observable<Product> {
    console.log('yay');
    return this.http.post<Product>(this.productUrl, product);
  }

  getAllProducts(): Observable<Product[]> {
    this.http.get<Product[]>(this.productUrl).subscribe(product => this.subject.next(product));
    return this.subject;
  }

  getProductById(id: string): Observable<Product> {
    const url = '$(this.productUrl)/$(id)';
    return this.http.get<Product>(url);
  }

  updateProduct(product: Product): Observable<any> {
    const id = product._id;
    const url = '$(this.productUrl)/$(id)';
    return this.http.put(url, product);

  }

  deleteProduct(id: string) {
    const url = '$(this.productUrl)/$(id)';
    this.http.delete<Product>(url).subscribe(() => {
      this.getAllProducts();
    });
  }

  searchProducts(term: string): Observable<Product[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Product[]>('$(this.productUrl)/name/$(id)');
  }
}
