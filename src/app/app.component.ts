import { Component, Input, OnInit } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { Posts } from '../app/model/post';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  posts = Posts;  
  constructor(private service: ApiServiceService) {}

  ngOnInit() {
    this.showUsers();
  }

  showUsers() {
    this.service.getAllPosts().subscribe(data => {
      this.posts = data;
    });
  }




}
