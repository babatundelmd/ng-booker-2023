import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-udpate-book',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './udpate-book.component.html',
  styleUrls: ['./udpate-book.component.css']
})
export class UdpateBookComponent {
  FormData!: FormGroup;
  isloading! : boolean;
  book$!: any;
  id!: any;

  constructor(
    private builder: FormBuilder,
    private book: BookService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.book.getBook(this.id).subscribe((res) => {
        this.book$ = res;
        this.FormData.patchValue(this.updateFormValues());
      });
    });

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
    this.book.updateBook(this.id, formData).subscribe((res) => {
      this.toastr.success('Updated 🙌');
      setTimeout(() => {
       location.href = '/'
      }, 2000);
    });
  }

  updateFormValues() {
    return {
      author: this.book$.author,
      country: this.book$.country,
      language: this.book$.language,
      pages: this.book$.pages,
      title: this.book$.title,
      year: this.book$.year,
    };
  }
}
