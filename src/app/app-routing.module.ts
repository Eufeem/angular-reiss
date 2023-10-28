/**
 * Components
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Components
 */
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UserComponent } from './pages/user/user.component';
import { RoleComponent } from './pages/role/role.component';
import { ScrollComponent } from './components/scroll/scroll.component';
import { ScrollQueryComponent } from './components/scroll-query/scroll-query.component';

const routes: Routes = [
  { path: '',   redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'user', component: UserComponent },
  { path: 'role', component: RoleComponent },
  { path: 'scroll', component: ScrollComponent },
  { path: 'scrollQuery', component: ScrollQueryComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
