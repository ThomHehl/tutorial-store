import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { AppLoadService } from './services/app-load.service';
import { NameService } from './services/name.service';
import { HttpClientModule } from '@angular/common/http';
import { nameReducer } from './reducers/name.reducer';
import { StoreModule } from '@ngrx/store';

export function load_name(appLoadService: AppLoadService) {
  return () => appLoadService.loadName();
}

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      name: nameReducer
    }),
    HttpClientModule
  ],
  providers: [
    AppLoadService,
    { provide: APP_INITIALIZER, useFactory: load_name, deps: [AppLoadService], multi: true },
    NameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
