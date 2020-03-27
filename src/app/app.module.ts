import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MaterialModule } from './material-module';
import { ModalModule, BsModalService, BsModalRef } from 'ngx-bootstrap';

//internal app dependencies
import { ContactinfoBottomsheetComponent, ContactInfoBottomSheet } from './components/contactinfo-bottomsheet/contactinfo-bottomsheet.component';
import { BusinessInquiryComponent } from './components/business-inquiry/business-inquiry.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule, 
    AppRoutingModule, 
    ModalModule.forRoot()
  ],
  entryComponents: [ContactinfoBottomsheetComponent, ContactInfoBottomSheet, BusinessInquiryComponent],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactinfoBottomsheetComponent,
    ContactInfoBottomSheet,
    BusinessInquiryComponent
  ],
  providers: [
    BsModalService,
    BsModalRef,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }