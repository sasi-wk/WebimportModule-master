import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UploadinfoComponent } from './uploadinfo/uploadinfo.component';
import { ErrorinfoComponent } from './errorinfo/errorinfo.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UploadedService } from './service/uploaded.service';


import {DialogModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    UploadinfoComponent,
    ErrorinfoComponent,
    FileuploadComponent
  ],
  imports:   [BrowserModule, HttpModule, FormsModule,DialogModule,BrowserAnimationsModule,ReactiveFormsModule ],
  providers: [UploadedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
