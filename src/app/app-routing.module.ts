import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './book/add-book/add-book.component';
import { BookComponent } from './book/book.component';
import { LendComponent } from './book/lend/lend.component';
import { UdpateBookComponent } from './book/udpate-book/udpate-book.component';

const routes: Routes = [
  { path: '', component: BookComponent, pathMatch: 'prefix' },

  {
    path: 'add-book',
    component: AddBookComponent,
  },

  {
    path: 'update/:id',
    component: UdpateBookComponent,
  },

  {
    path: 'lend',
    component: LendComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BookComponent],
  exports: [RouterModule],
})
export class AppRoutingModule {}
