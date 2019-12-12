import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Users } from '../model/user';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.scss']
})
export class ShowUsersComponent implements OnInit {

  listUsers: Users[];

  constructor(private _service: ApiServiceService) { }

  ngOnInit() {
    this._service.getAllUsers().subscribe(data => {
      // console.log(data);
      this.listUsers = data;
    })
  }

}
