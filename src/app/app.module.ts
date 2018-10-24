import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BemModule } from 'angular-bem';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidetipsComponent } from './sidetips/sidetips.component';
import { ModalComponent } from './modal/modal.component';
import { FormProductComponent } from './form-product/form-product.component';


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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
