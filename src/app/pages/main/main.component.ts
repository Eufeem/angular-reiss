import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  listUser: User[] = []
  constructor(private userService: UserService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllRequest();

    this.showSuccess();
  }

  getAllRequest() {
    this.userService.getAll().subscribe({
      next: res => {
        this.listUser = res
      },
      error: err => console.log(err)
    })
  }
  
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
