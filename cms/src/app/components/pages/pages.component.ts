import { PageService } from './../../services/page.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  private param:any;
  public pageBody: any;
  public pages:any;

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private pageService: PageService,) {}

  ngOnInit(): void {

    this.pageService.getPages().subscribe(pages =>{this.pages=pages;});

    this.route.params.subscribe(params=>{
      this.param = params['page'];
      if(this.param===undefined)
      {
        this.param='home';
      }
      this.pageService.getPage(this.param).subscribe(pageBody=>{
        if(pageBody == null)
        {
          this.router.navigateByUrl('');
        }
        this.pageBody=pageBody;
      })
    })

  }

}
