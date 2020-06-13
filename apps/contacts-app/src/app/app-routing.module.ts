import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewContactsComponent } from './contacts/pages/view-contacts/view-contacts.component';

const appRoutes: Routes = [
  {
    path: 'contacts',
    component:ViewContactsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
