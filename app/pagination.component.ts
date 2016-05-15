import {Component, Input, OnChanges, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'pagination',
    template: `
    <nav *ngIf="items.length > pageSize">
    <ul class="pagination">
        <li [class.disabled]="currentPage == 1" (click)="previous()">
            <span>&laquo;</span>
        </li>
        <li [class.active]="currentPage == page" *ngFor="let page of pages" (click)="changePage(page)">
            <a>{{page}}</a>
        <li [class.disabled]="currentPage == pages.length" (click)="next()">
            <span>&raquo;</span>
        </li>
    </ul>
    </nav>`
})
export class PaginationComponent implements OnChanges {
    @Input() items = [];
    @Input('page-size') pageSize = 10;
    @Output('page-changed') pageChanged = new EventEmitter();
    currentPage;
    pages = [];

    ngOnChanges() {
        this.currentPage = 1;
        var pageCount = this.items.length / this.pageSize;
        this.pages = [];
        for (var i = 1; i <= pageCount; i++) {
            this.pages.push(i);
        }
    }

    changePage(page) {
        this.currentPage = page;
        this.pageChanged.emit(page);
    }

    previous() {
        if (this.currentPage == 1) return;
        this.currentPage--;
        this.pageChanged.emit(this.currentPage);
    }

    next() {
        if (this.currentPage == this.pages.length) return;
        this.currentPage++;
        this.pageChanged.emit(this.currentPage);
    }
}