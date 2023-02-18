import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent {
  FormData!: FormGroup;
  isloading!: boolean;

  constructor(
    private builder: FormBuilder,
    private book: BookService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.FormData = this.builder.group({
      author: new FormControl(''),
      country: new FormControl(''),
      language: new FormControl(''),
      pages: new FormControl(''),
      title: new FormControl(''),
      year: new FormControl(''),
    });
  }

  reset() {
    this.FormData = this.builder.group({
      author: new FormControl(''),
      country: new FormControl(''),
      language: new FormControl(''),
      pages: new FormControl(''),
      title: new FormControl(''),
      year: new FormControl(''),
    });
  }

  onSubmit(formData: any) {
    this.book.postBook(formData).subscribe((res) => {
      this.toastr.success('Book Added 💃');
      setTimeout(() => {
        this.reset();
      }, 2000);
    });
  }
}
