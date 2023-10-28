import { Component, OnInit, inject } from '@angular/core';
import { RoleService } from 'src/app/services/role.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { Role } from 'src/app/models/Role';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnInit {

  // Inject Services
  roleService$ = inject(RoleService);
  navbarService$ = inject(NavbarComponent)

  // Global Variables
  pages: any = [];
  pageNumber: number = 0;
  totalPages: number = 0
  totalPagesArray: number[] = []
  collectionSize: number = 0
  list: Role[] = [];

  ngOnInit(): void {
    this.pagesRolesRequest(0)
   }

  /**
   * Request
   * @param page 
   * @param size 
   */
  pagesRolesRequest(page: number, size: number = 10) {
    this.navbarService$.startLoading();
    setTimeout(() => {
      this.roleService$.getAllPagesRoles(page, size).subscribe({
        next: res => {
          // console.log(res)
          this.pages = res
          this.pageNumber = res.pageable.pageNumber + 1
          this.totalPages = res.totalPages
          this.collectionSize = res.totalElements

          // this.list = res.content

          if (page < 1) {
            console.log("Page 0");
            this.list = res.content
          } else {
            this.list = [...this.list, ...res.content]
          }
          
          for (let index = 0; index < this.totalPages; index++) {
            const element = index + 1;
            // console.log(`Pages`, element);
            this.totalPagesArray.push(element)
          }
        }, error: err => {
          console.error("Error Roles Get", err.message)
          this.navbarService$.stopLoading();
        }, complete: () => {
          console.log('Complete Roles Request');
          this.navbarService$.stopLoading();
        }
      })
    }, 1000);
  }

  /**
   * Scroll
   */
  onScroll() {
    if (this.pageNumber != this.totalPages) {
      this.pageNumber = this.pageNumber++
      console.log(this.pageNumber);
      this.pagesRolesRequest(this.pageNumber)
    } else {
      console.log("Page Number", this.pageNumber);
      console.log("Total pages", this.totalPages);
    }
    
  }
}
