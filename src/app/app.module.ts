import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BemModule } from 'angular-bem';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidetipsComponent } from './sidetips/sidetips.component';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal.service';
import { FormProductComponent } from './form-product/form-product.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    routingComponents,
    SidetipsComponent,
    ModalComponent,
    FormProductComponent
  ],
  imports: [
    BrowserModule,
    BemModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [
    ModalService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
