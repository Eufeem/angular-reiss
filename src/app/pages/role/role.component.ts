import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { LoadingBarService } from '@ngx-loading-bar/core';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { Role } from 'src/app/models/Role';
import { RoleService } from 'src/app/services/role.service';
import { LanguageApp } from 'src/app/variables/LanguageApp';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  list: Role[] = [];

  form = new FormGroup({
    idRole: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
    code: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(3)])
  })

  pages: any = [];
  pageNumber: number = 0;
  totalPages: number = 0
  totalPagesArray: number[] = []
  collectionSize: number = 0

  constructor(private navbarComponent: NavbarComponent,
              private loadingBar: LoadingBarService,
              private roleService: RoleService) { }

  ngOnInit(): void {
    this.pagesRolesRequest(0)
    // this.getAllRequest()
  }

  onSubmit() {
    console.warn(this.form.value);
    this.form.reset()
    let role = this.form.value as Role
    this.postRequest(role)
  }

  eventPage(pageNumber: any) {
    this.pagesRolesRequest(pageNumber - 1)
  }

  /* - REQUEST- */

  /**
   * Get Roles
   */
  getAllRequest() {
    this.roleService.getAllRequest().subscribe({
      next: res => {
        this.list = res;
      }, error: err => console.error('Error', err),
      complete: () => console.debug('Complete getRolesRequest')
    })
  }

  /**
   * Roles Request Page
   * @param page 
   * @param size 
   */
  pagesRolesRequest(page: number, size: number = 10) {
    this.navbarComponent.startLoading();
    setTimeout(() => {
      this.roleService.getAllPagesRoles(page, size).subscribe({
        next: res => {
          console.log(res)
          this.pages = res
          this.pageNumber = res.pageable.pageNumber + 1
          this.totalPages = res.totalPages
          this.collectionSize = res.totalElements

          this.list = res.content
          
          for (let index = 0; index < this.totalPages; index++) {
            const element = index + 1;
            console.log(`Pages`, element);
            this.totalPagesArray.push(element)
          }
        },
        error: err => {
          console.error("Error Roles Get", err.message)
          this.navbarComponent.stopLoading();
        },
        complete: () => {
          console.log('Complete Roles Request');
          this.navbarComponent.stopLoading();
        }
      })
    }, 1000);
  }

  /**
   * Post Role
   * @param role Object Roles
   */
  postRequest(role: Role) {
    this.roleService.postRequest(role).subscribe({
      next: res => console.log(res),
      error: err => console.log(err),
      complete: () => console.log('Complete Post')
    })
  }

  /**
   * Put Role
   * @param role Object Roles
   */
  updateRequest(role: Role) {
    this.roleService.updateRequest(role).subscribe({
      next: res => console.log(res),
      error: err => console.log(err),
      complete: () => console.log('Complete Put')
    })
  }

  deleteRequest(id: number) {
    this.roleService.deleteRequest(id).subscribe({
      next: res => console.log(res),
      error: err => console.log(err),
      complete: () => console.log('Complete Delete')
    })
  }

  /**
   * On Click
   */
  changePage(page: number, size: number) {
    console.log('Click page', page);
    this.totalPagesArray = []
    this.pagesRolesRequest(page - 1, size)
  }

  delete(idRole: any) {
    this.deleteRequest(idRole)
    this.getAllRequest()
  }

  /**
   * Loading Methods
   */
  startLoading() {
    this.loadingBar.start();
  }

  stopLoading() {
    this.loadingBar.complete();
  }
}
