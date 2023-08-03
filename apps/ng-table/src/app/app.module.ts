import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { TableComponent } from 'libs/ng-table-ui/src/lib/table.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, TableComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
