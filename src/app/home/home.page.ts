import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router:Router
  ) { }
    ngOnInit() {
    
  }
  goTosubject() {
    this.router.navigate(['school'])
  }
  goTonews() {
    this.router.navigate(['news'])
  }
  goTomain() {
    this.router.navigate(['main'])
  }

}
