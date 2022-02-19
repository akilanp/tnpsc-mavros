import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WpIonicService } from '../shared/wp-ionic.service';
@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
newsdetail: any;
    constructor(
     private activatedRoute: ActivatedRoute, 
    private wpService: WpIonicService, 
  ) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.wpService.postDetails(id).subscribe((data) => {
      this.newsdetail = data;
    });
  }
  goToOrgPost() {
    window.open(this.newsdetail.link, '_blank');
  }  
}
