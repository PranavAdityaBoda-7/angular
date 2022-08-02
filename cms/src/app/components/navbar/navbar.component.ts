import { PageService } from './../../services/page.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  pages: any;
  constructor(public pageService: PageService) { }

  ngOnInit(): void {
    this.pageService.getPages().subscribe( pages=> {
      this.pageService.pagesBS.next(pages);
      this.pages= this.pageService.pagesBS;
    });
  }

}
