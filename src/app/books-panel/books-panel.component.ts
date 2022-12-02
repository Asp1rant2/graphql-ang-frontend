import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from "apollo-angular";

const booksQuery = gql`
  query GetBooksAll {
    books {
      title
      author
      price
    }
  }
`;

@Component({
  selector: 'app-books-panel',
  templateUrl: './books-panel.component.html',
  styleUrls: ['./books-panel.component.scss'],
})
export class BooksPanelComponent implements OnInit {

  books: any[] = [];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo
    .watchQuery({
      query: booksQuery,
    })
    .valueChanges.subscribe((result: any) => {
      this.books = result?.data?.books;
      this.loading = result.loading;
      this.error = result.error;
    });
  }

}
