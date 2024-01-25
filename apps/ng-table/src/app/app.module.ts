import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TableComponent } from '@my-ng-store/ngx-dynamic-table';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TableComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
