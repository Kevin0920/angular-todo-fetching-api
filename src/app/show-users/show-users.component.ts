import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Users } from '../model/user';
import { Post } from '../model/post';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.scss']
})
export class ShowUsersComponent implements OnInit {

  listUsers: Users[];
  listPosts: Post[];
  constructor(private _service: ApiServiceService) { }

  ngOnInit() {
    this._service.getAllUsers().subscribe(data => {
      // console.log(data);
      this.listUsers = data;
    });

    this._service.getPostByUserId().subscribe(data => {
      this.listPosts = data
    })

  }

}
