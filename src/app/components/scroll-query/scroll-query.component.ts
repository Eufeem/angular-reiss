import { Component, OnInit, inject } from '@angular/core';
import { RoleService } from 'src/app/services/role.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { Role } from 'src/app/models/Role';

@Component({
  selector: 'app-scroll-query',
  templateUrl: './scroll-query.component.html',
  styleUrls: ['./scroll-query.component.css']
})
export class ScrollQueryComponent implements OnInit {

  roleService = inject(RoleService);
  navbarService = inject(NavbarComponent)

  pageNumber: number = 0;
  totalPages: number = 0
  list: Role[] = [];

  ngOnInit(): void {
    this.pagesRolesRequest('r', 0)
   }

  pagesRolesRequest(text: string, page: number, size: number = 5) {
    this.navbarService.startLoading();
    setTimeout(() => {
      this.roleService.getPageableQuery(text, page, size).subscribe({
        next: res => {
          // console.log(res)
          // this.pages = res
          this.pageNumber = res.pageable.pageNumber + 1
          this.totalPages = res.totalPages
          // this.collectionSize = res.totalElements

          if (page < 1) {
            console.log("Page 0");
            this.list = res.content
          } else {
            this.list = [...this.list, ...res.content]
          }
        }, error: err => {
          console.error("Error Roles Get", err.message)
          this.navbarService.stopLoading();
        }, complete: () => {
          console.log('Complete Roles Request');
          this.navbarService.stopLoading();
        }
      })
    }, 400);
  }

  onScroll() {
    if (this.pageNumber != this.totalPages) {
      this.pageNumber = this.pageNumber++
      console.log(this.pageNumber);
      this.pagesRolesRequest('r', this.pageNumber)
    } else {
      console.log("Page Number", this.pageNumber);
      console.log("Total pages", this.totalPages);
    }
  }

  changeFn($event: any) {
    // this.list = []
    // this.pagesRolesRequest($event.target.value, 0)
  }
}
