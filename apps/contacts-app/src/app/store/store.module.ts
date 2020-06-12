import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReducerToken, ReducerProvider } from './app.reducer';
import { StoreModule } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'



@NgModule({
  imports: [
    StoreModule.forRoot(ReducerToken, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument({}) : []
  ],

  exports: [StoreModule],
  providers: [ReducerProvider]
})
export class AppStoreModule { }
