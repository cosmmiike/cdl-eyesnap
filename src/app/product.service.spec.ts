import {inject, TestBed} from '@angular/core/testing';

import {ProductService} from './product.service';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppModule } from './app.module';

describe('ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService, {provide: APP_BASE_HREF, useValue: '/'}],
      imports: [HttpClientModule, AppRoutingModule, AppModule],
    });
  });

  it('should be created', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));
});
