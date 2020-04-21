import { Component, Input, OnInit } from '@angular/core';
import { Post } from "../model/post";
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.scss']
})
export class LandingComponent implements OnInit {
  @Input() post: Post;
  constructor() { }

  ngOnInit() {
  }

 

  onBackToTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }




}
