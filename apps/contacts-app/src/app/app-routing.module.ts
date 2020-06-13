import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListContactsComponent } from './contacts/pages/list-contacts/list-contacts.component';

const appRoutes: Routes = [
  {
    path: 'contacts',
    component:ListContactsComponent
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
