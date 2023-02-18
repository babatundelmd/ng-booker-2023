import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from './add-book/add-book.component';
import { LendComponent } from './lend/lend.component';
import { UdpateBookComponent } from './udpate-book/udpate-book.component';
import { BookService } from './book.service';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    AddBookComponent,
    LendComponent,
    UdpateBookComponent,
  ],
  providers: [BookService],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  public books$: any;
  constructor(
    private book: BookService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.book.getBooks().subscribe((res) => {
      this.books$ = res;
    });
  }

  onDelete(id: any) {
    this.book.deleteBook(id).subscribe((res) => {
      this.toastr.success('Deleted Successfully');
      setTimeout(() => {
        location.reload();
      }, 2000);
    });
  }

  onUpdate(id: any) {
    this.router.navigate([`/update/${id}`]);
  }
}
