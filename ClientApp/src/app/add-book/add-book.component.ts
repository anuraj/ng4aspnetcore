import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddBookComponent implements OnInit {
  book: any = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  createBook() {
    this.http.post('/api/books', this.book)
      .subscribe(res => {
        const id = res['Id'];
        this.router.navigate(['/details', id]);
      }, (err) => {
        console.log(err);
      });
  }
}
