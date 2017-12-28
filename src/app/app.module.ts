import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { BcsformComponent } from './bcsform/bcsform.component';
import { BcsService } from './services/bcs.service';


@NgModule({
  declarations: [
    AppComponent,
    BcsformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [BcsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
