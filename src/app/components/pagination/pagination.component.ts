import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Paginate} from "../../interfaces/paginate";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input('align') align: 'start' | 'center' | 'end' | '' = 'start';
  @Input('paginate') paginate: Paginate = {
    total: 1,
    current: 1,
    perPage: 15
  };

  @Output('changePage') changePage: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  selectPage(page: number) {
    this.paginate.current = page;
    this.changePage.emit(page);
  }

  counter() {
    return new Array(this.paginate.total);
  }

}
