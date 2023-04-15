import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllRequest();
  }

  getAllRequest() {
    this.userService.getAll().subscribe({
      next: res => console.log(res),
      error: err => console.log(err)
    })
  }
}
