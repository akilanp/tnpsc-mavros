import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor() { }
  subjects;
  ngOnInit() {
    this.subjects=[

      { 
      img:'assets/english.png',
      name: 'English'
      },
      {
      img:'assets/chemistry.png',
      name:'chemistry'
      },
      {
      img:'assets/statistics.png',
      name:'statistics'
      },
      {
      img: 'assets/maths.png',
      name: 'mathematics'
      },
      {
      img:'assets/physics.png',
      name:'physics'
      },
      {
      img:'assets/social.png',
      name:'social science'
    },
    ];
  }
  goTosubject() {
  }
  }
